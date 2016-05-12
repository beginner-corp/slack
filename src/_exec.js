import request from 'request'

const req = request.defaults({
  baseUrl: 'https://slack.com/api/',
  headers: {
    Accept: 'application/json'
  },
  json: true
})

export default function exec(url, form, callback) {

  // always post
  req.post({url, form}, (err, res)=> {
    var rateLimit = 'You are sending too many requests. Please relax.'
    if (err) {
      // if request failed bubble the error
      callback(err)
    }
    else if (res.body.error) {
      // if Slack returns an error bubble the error
      callback(Error(res.body.error))
    }
    else if (typeof res.body === 'string' && res.body.includes(rateLimit)) {
      // sometimes you need to chill out
      callback(Error('rate_limit'))
    }
    else {
      // success! clean up the response
      let json = res.body
      delete json.ok
      callback(null, json)
    }
  })
/// eom
}
