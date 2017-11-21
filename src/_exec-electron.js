var qs = require('querystring')
var url = require('url')
var validate = require('./_validate')
var promisify = require('./_promisify')
var origin = require('./_origin')
var electron = require('electron')
var net = electron? (electron.net || electron.remote? electron.remote.net : undefined) : undefined

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

/**
 * this method uses electron.net or electron.remote.net
 * it also does not fire the 'end' if it is registered after 'data' 
 */
function _post(options, callback) {
  // parse out the options from options.url
  var opts = url.parse(options.url)
  opts.method = 'POST'
  opts.rejectUnauthorized = false
  opts.headers = options.headers || {}
  opts.headers['User-Agent'] = 'tiny-http'

  var req = net.request(opts) 
  var raw = []

  req.on('response', (response) => {
    // these are order dependent??
    response.on('error', callback)
    response.on('end', () => {
      var body = JSON.parse(raw.join(''))
      callback(null, {body})
    })
    response.on('data', (chunk) => {
      raw.push(chunk)
    })
  })
  req.write(qs.stringify(options.data))
  req.end()
}
