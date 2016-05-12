import http from 'httpplease'
import qs from 'query-string'

export default function exec(ns, json, callback) {
  
  let query = qs.stringify(json)
  let baseUrl = 'https://slack.com/api/'
  let url = `${baseUrl}${ns}?${query}`
  var rateLimit = 'You are sending too many requests. Please relax.'

  http.get(url, (err, res)=> {
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
      let json = JSON.parse(res.body)
      if (json.ok) {
        delete json.ok
        callback(null, json)
      }
      else {
        callback(Error(json.error))
      }
    }
  })
/// eom
}
