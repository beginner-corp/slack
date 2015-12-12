import exec from './exec'
import req from './_required'

export default function authTest(params, callback) {
  let err = req('oauth.access', params, 'client_id', 'client_secret', 'code')
  if (err) {
    callback(err)
  }
  else {
    exec('oauth.access', params, callback)
  }
}
