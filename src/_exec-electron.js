var qs = require('querystring')
var url = require('url')
var validate = require('./_validate')
var promisify = require('./_promisify')
var origin = require('./_origin')

/**
 * returns a promise if callback isn't defined; _exec is the actual impl
 */
module.exports = function electronFactory(options) {
  // get call stack trace in case we throw later
  var trace = new Error()

  var exec = _execFactory(options)
  return function _execElectron(url, form, callback) {
    if (!callback) {
      var pfy = promisify(exec)
      return pfy(url, form).catch(function(err) {
        err.stack = trace.stack.replace(/^Error/, "Error: " + err.message)
        throw err
      })
    }
    else {
      exec(url, form, function(err, res) {
        if (err) {
          err.stack = trace.stack.replace(/^Error/, "Error: " + err.message)
        }
        callback(err, res)
      })
    }
  }
}

/**
 * performs the http request to the Slack Web API
 */
function _execFactory(options) {
  // returns an exec function with options.username and options.password passed in
  return function __exec(url, form, callback) {
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
      // setup post params
      var params = {
        url: `${origin}/api/${url}`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: form
      }
      // add optionals
      if (options) {
        params = Object.assign({}, params, options) 
      }
      _post(params, function _res(err, res) {
        if (err) {
          callback(err)
        }
        else if (res.statusCode === 429) {
          var e = Error('ratelimited')
          e.retry = res.headers['retry-after']
          callback(e)
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

  var req = options.useElectronNet.request(opts) 
  var raw = []

  req.on('response', function _req(response) {
    // these are order dependent??
    response.on('abort', callback)
    response.on('error', callback)
    response.on('login', function _login(auth, login) {
      // if the dev passes in a login function delegate to that
      if (options.login) {
        options.login(auth, login)
      }
      else {
        // otherwise fallback to ctor params if they exist
        // if these are undefined abort gets called
        login(options.username, options.password)
      }
    })
    response.on('end', function _end() {
      var body = JSON.parse(raw.join(''))
      callback(null, {body})
    })
    response.on('data', chunk=> raw.push(chunk))
  })
  req.write(qs.stringify(options.data))
  req.end()
}
