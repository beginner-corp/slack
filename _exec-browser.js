module.exports = function exec(url, params, callback) {
  if (!callback) {
    return new Promise(function(resolve, reject) {
      _exec(url, params, function (err, res) {
        if (err) reject(err)
        else resolve(res)
      })
    })
  }
  else {
    _exec(url, params, callback)
  }
}

function _exec(url, params, callback) {
  function throws(e) {
    callback(e)
  }
  fetch(`https://slack.com/api/${url}`, {
	  method: 'POST', 
	  headers: new Headers({
		  'Content-Type': 'application/x-www-form-urlencoded'
	  }),
    body: _serialize(params)
  }).then(function(res) {
    res.json().then(function(res) {
      callback(null, res)
    }).catch(throws)
  }).catch(throws)
}

function _serialize(obj) {
  var str = [];
  for(var p in obj) {
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]))
    }
  }
  return str.join("&")
}
