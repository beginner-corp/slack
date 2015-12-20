import http from 'httpplease'
import qs from 'query-string'

export default function exec(ns, json, callback) {
  
  let query = qs.stringify(json)
  let baseUrl = 'https://slack.com/api/'
  let url = `${baseUrl}${ns}?${query}`

  http.get(url, (err, res)=> {
    if (err) {
      // if request failed bubble the error
      callback(err)
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
