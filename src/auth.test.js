import exec from './exec'

export default function authTest(callback) {
  let token = process.env.SLACK_TOKEN
  if (typeof token === 'undefined') {
    callback(Error('process.env.SLACK_TOKEN not defined'))
  }
  else {
    exec('auth.test', {token}, callback)
  }
}
