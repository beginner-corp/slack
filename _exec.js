var http = require('tiny-json-http')
var validate = require('./_validate')

module.exports = function _exec(url, form, callback) {

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
      url: `https://slack.com/api/${url}`,
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
        callback(Error(res.body.error))
      }
      else {
        callback(null, res.body)
      }
    })
  }
}
