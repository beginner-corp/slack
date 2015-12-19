import xhr from 'xhr'

let baseUrl = 'https://slack.com/api/'

export default function exec(url, json, callback) {

  let url = `${baseUrl}${url}`

  xhr.post(url, {json}, (err, res)=> {
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
