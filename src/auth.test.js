import exec from './exec'

export default function authTest(token, callback) {
  exec('auth.test', {token}, callback)
}
