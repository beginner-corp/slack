import exec from './_exec'
import validate from './_validate'

export default function authTest(params, callback) {
  let err = validate('oauth.access', params, 'client_id', 'client_secret', 'code')
  if (err) {
    callback(err)
  }
  else {
    exec('oauth.access', params, callback)
  }
}
