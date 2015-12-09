import exec from './exec'

export default function apiTest(params, callback) {
  exec('api.test', params, callback)
}
