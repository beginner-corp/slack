import exec from './exec'

export default function authTest(code, callback) {

  let client_id     = process.env.SLACK_CLIENT_ID
  let client_secret = process.env.SLACK_CLIENT_SECRET
  let undef         = v=>typeof v === 'undefined'

  if (undef(client_id)) {
    callback(Error('process.env.SLACK_CLIENT_ID not defined'))
  }
  else if (undef(client_secret)) {
    callback(Error('process.env.SLACK_CLIENT_SECRET not defined'))
  }
  else {
    exec('oauth.access', {client_id, client_secret, code}, callback)
  }
}
