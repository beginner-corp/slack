import exec from './exec'

export default function authTest(params, callback) {

  let req = ['client_id', 'client_secret', 'code']
  let bad = req.filter(k=> typeof params[k] === 'undefined')
  let err = bad.length? Error(`oauth.access missing params: ${bad.join(', ')}`) : false

  if (err) {
    callback(err)
  }
  else {
    exec('oauth.access', params, callback)
  }
}
