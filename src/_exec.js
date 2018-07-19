var http = require('tiny-json-http')
var validate = require('./_validate')
var promisify = require('./_promisify')
var origin = require('./_origin')

/**
 * returns a promise if callback isn't defined; _exec is the actual impl
 */
module.exports = function exec(url, form, callback) {
  // get call stack trace in case we throw later
  var trace = new Error()

  if (!callback) {
    var pfy = promisify(_exec)
    return pfy(url, form).catch(function(err) {
      err.stack = trace.stack.replace(/^Error/, "Error: " + err.message)
      throw err
    })
  }
  else {
    _exec(url, form, function(err, res) {
      if (err) {
        err.stack = trace.stack.replace(/^Error/, "Error: " + err.message)
      }
      callback(err, res)
    })
  }
}

/**
 * performs the http request to the Slack Web API
 */
function _exec(url, form, callback) {

  var err = validate(url, form)
  if (err) {
    callback(err)
  }
  else {
  
    // api.slack.com/files.upload requires multipart/form-data post
    // which means we need to do a few things differently…
    var isUploading = /files.upload/.test(url)

    // stringify any objects under keys when application/x-www-form-urlencoded
    if (!isUploading) {
      Object.keys(form).forEach(function (key) {
        if (typeof form[key] === 'object') {
          form[key] = JSON.stringify(form[key])
        }
      })
    }

    // always post to slack
    http.post({
      url: `${origin}/api/${url}`,
      headers: {
        'Content-Type': isUploading? 'multipart/form-data' : 'application/x-www-form-urlencoded'
      },
      data: form
    }, 
    function _res(err, res) {
      if (err && err.message === 'POST failed with: 429') {
        // workaround Slacks lack of symmetry not ours…
        var e = Error('ratelimited')
        e.retry = err.raw.headers['retry-after']
        callback(e)
      }
      else if (err) {
        callback(err)
      }
      else if (res.body && res.body.error) {
        var e = Error(res.body.error)
        if (res.body.response_metadata && res.body.response_metadata.messages) {
          e.messages = res.body.response_metadata.messages
        }
        callback(e)
      }
      else {
        callback(null, res.body)
      }
    })
  }
}
