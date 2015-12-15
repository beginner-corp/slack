import exec from './_exec'

export default function apiTest(params, callback) {
  exec('api.test', params, callback)
}
