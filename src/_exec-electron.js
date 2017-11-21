var qs = require('querystring')
var url = require('url')
var validate = require('./_validate')
var promisify = require('./_promisify')
var origin = require('./_origin')
var electron = require('electron')
var net = electron.net

console.log({electron, net})
/**
 * returns a promise if callback isn't defined; _exec is the actual impl
 */
module.exports = function _execElectron(url, form, callback) {
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

    _post({
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

function _post(options, callback) {
  // require options.url or fail noisily
  if (!options.url) {
    throw Error('options.url required')
  }

  // parse out the options from options.url
  var opts = url.parse(options.url)
  opts.method = 'POST'
  opts.rejectUnauthorized = false
  opts.headers = options.headers || {}
  opts.headers['User-Agent'] = opts.headers['User-Agent'] || 'tiny-http'
  opts.headers['Content-Type'] = opts.headers['Content-Type'] || 'application/json; charset=utf-8'

  var reqJSON = opts.headers['Content-Type'].startsWith('application/json')
  var postData = reqJSON? JSON.stringify(options.data || {}) : qs.stringify(options.data || {})

  // make a POST request
  var req = net.request(opts, function(res) {

    var raw = [] // keep our buffers here
    var ok = res.statusCode >= 200 && res.statusCode < 300

    res.on('data', function _data(chunk) {
      raw.push(chunk)
    })

    res.on('end', function _end() {
      var err = null
      var result = null

      try {
        var isJSON = res.headers['content-type'].startsWith('application/json')
        var rawData = Buffer.concat(raw).toString()
        result = isJSON? JSON.parse(rawData) : rawData
      }
      catch (e) {
        err = e
      }

      if (!ok) {
        err = Error('POST failed with: ' + res.statusCode)
        err.raw = res
        err.body = result
        callback(err)
      } 
      else {
        callback(err, {body:result, headers:res.headers})
      }
    })
  })

  req.on('error', callback)

  req.write(postData)

  req.end()
}
