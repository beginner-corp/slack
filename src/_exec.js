var http = require('tiny-json-http')
var validate = require('./_validate')
var promisify = require('./_promisify')
var origin = require('./_origin')

/**
 * returns a promise if callback isn't defined; _exec is the actual impl
 */
module.exports = function exec(url, form, callback) {
  if (!callback) {
    var pfy = promisify(_exec)
    return pfy(url, form)
  }
  else {
    _exec(url, form, callback)
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
  
    // stringify any objects under keys since form is posted as application/x-www-form-urlencoded
    Object.keys(form).forEach(function (key) {
      if (typeof form[key] === 'object') {
        form[key] = JSON.stringify(form[key])
      }
    })

    // always post to slack
    http.post({
      url: `${origin}/api/${url}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: form
    }, 
    function _res(err, res) {
      if (err) {
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
