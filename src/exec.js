import req from 'request'

export default function exec(ns, params, callback) {

  // config-y things
  let client_id     = process.env.SLACK_CLIENT_ID
  let client_secret = process.env.SLACK_CLIENT_SECRET
  let json          = true
  let base          = 'https://slack.com/api/'
  let headers       = {Accept: 'application/json'}

  // tidy up the api call params
  let url = `${base}${ns}`
  let form = Object.assign({client_id, client_secret}, params)
  let query = {url, headers, form, json}

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
