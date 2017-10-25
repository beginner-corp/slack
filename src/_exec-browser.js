let validate = require('./_validate')
let origin = require('./_origin')
let encode = encodeURIComponent
let serialize = o=> Object.keys(o).map(k=> encode(k) + '=' + encode(o[k])).join('&')

/**
 * returns a promise if callback isn't defined; _exec is the actual impl
 */
module.exports = function exec(url, params, callback) {
  if (!callback) {
    return new Promise(function(resolve, reject) {
      _exec(url, params, function __exec(err, res) {
        if (err) {
          reject(err)
        }
        else { 
          resolve(res)
        }
      })
    })
  }
  else {
    _exec(url, params, callback)
  }
}

async function _exec(url, params, callback) {
  try {
    // validates the params against api.json
    var err = validate(url, params)
    if (err) throw err

    // stringify any objects under keys since form 
    // is posted as application/x-www-form-urlencoded
    Object.keys(params).forEach(function (key) {
      if (typeof params[key] === 'object') {
        params[key] = JSON.stringify(params[key])
      }
    })

    var opts = {
      method: 'POST', 
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded'
      }),
      body: serialize(params)
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
    else {
      callback(null, json)
    }
  }
  catch(e) {
    callback(e)
  }
}
