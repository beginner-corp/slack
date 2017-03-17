import http from 'tiny-json-http'

export default function exec(url, form, callback) {

  // stringify any objects under keys since form is posted as application/x-www-form-urlencoded
  Object.keys(form).forEach(function (key) {
    if (typeof form[key] === 'object') {
      form[key] = JSON.stringify(form[key])
    }
  })

  // always post
  http.post({
    url: `https://slack.com/api/${url}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: form
  }, 
  function _res(err, res) {
    // var rateLimit = 'You are sending too many requests. Please relax.'
    if (err) {
      // if request failed bubble the error
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
