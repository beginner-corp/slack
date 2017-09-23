var validate = require('./_validate')

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
      body: _serialize(params)
    }

    var res = await fetch(`https://slack.com/api/${url}`, opts)
    var json = await res.json()

    if (json.error) {
      callback(Error(json.error))
    }
    else {
      callback(null, json)
    }
  }
  catch(e) {
    callback(e)
  }
}

function _serialize(obj) {
  var str = []
  for(var p in obj) {
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]))
    }
  }
  return str.join('&')
}
