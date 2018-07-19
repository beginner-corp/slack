let validate = require('./_validate')
let origin = require('./_origin')
let encode = encodeURIComponent
let serialize = o=> Object.keys(o).map(k=> encode(k) + '=' + encode(o[k])).join('&')
let makeform = o => {
  let form = new FormData()
  Object.keys(o).forEach(k => {
    form.append(k, o[k])
  })
  return form
}

/**
 * returns a promise if callback isn't defined; _exec is the actual impl
 */
module.exports = function exec(url, params, callback) {
  // get call stack trace in case we throw later
  var trace = new Error()

  if (!callback) {
    return new Promise(function(resolve, reject) {
      _exec(url, params, function __exec(err, res) {
        if (err) {
          err.stack = trace.stack.replace(/^Error/, "Error: " + err.message)
          reject(err)
        }
        else {
          resolve(res)
        }
      })
    })
  }
  else {
    _exec(url, params, function(err, res) {
      if (err) {
        err.stack = trace.stack.replace(/^Error/, "Error: " + err.message)
      }
      callback(err, res)
    })
  }
}

async function _exec(url, params, callback) {
  try {
    // validates the params against api.json
    var err = validate(url, params)
    if (err) throw err

    var isUploading = /files.upload/.test(url)

    var opts = {
      method: 'POST',
      body: isUploading ? makeform(params) : serialize(params)
    }

    // leave headers undefined for multipart/form-data
    if (!isUploading) {
      opts.headers = new Headers({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    }

    var res = await fetch(`${origin}/api/${url}`, opts)
    var json = await res.json()

    if (json.error) {
      var e = Error(json.error)
      if (json.response_metadata && json.response_metadata.messages) {
        e.messages = json.response_metadata.messages
      }
      callback(e)
    }
    else if (res.status === 429) {
      var e = Error('ratelimited')
      e.retry = res.headers.get('retry-after')
      callback(e)
    }
    else {
      callback(null, json)
    }
  }
  catch(e) {
    callback(e)
  }
}
