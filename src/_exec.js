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
