import http from 'tiny-json-http'

export default function exec(url, form, callback) {
  // stringify any objects under keys since form is posted as application/x-www-form-urlencoded
  Object.keys(form).forEach(function (key) {
    if (typeof form[key] === 'object') {
      form[key] = JSON.stringify(form[key])
    }
  })

  var options = {
    url: `https://slack.com/api/${url}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: form
  }
  // console.log(options)

  // always post
  http.post(options, (err, res)=> {
    // var rateLimit = 'You are sending too many requests. Please relax.'
    if (res) res = JSON.parse(res)
    if (err) {
      // if request failed bubble the error
      callback(err)
    }
    else if (res.error) {
      callback(Error(res.error))
    }
    else {
      callback(null, res)
    }
  })
/// eom
}
