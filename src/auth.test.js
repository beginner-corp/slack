import exec from './_exec'

export default function authTest(token, callback) {
  let err = token.length > 0? false : Error('auth.test missing token')
  if (err) {
    callback(err)
  }
  else {
    exec('auth.test', {token}, callback)
  }
}
