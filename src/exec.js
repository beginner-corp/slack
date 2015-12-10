import req from 'request'

export default function exec(ns, params, callback) {

  // tidy up the api call params
  let base    = 'https://slack.com/api/'
  let url     = `${base}${ns}`
  let headers = {Accept:'application/json'}
  let form    = params
  let json    = true
  let query   = {url, headers, form, json}

  // always post
  req.post(query, (err, res)=> {
    if (err) {
      // if request failed bubble the error
      callback(err)
    }
    else if (res.body.error) {
      // if Slack returns an error bubble the error
      callback(Error(res.body.error))
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
