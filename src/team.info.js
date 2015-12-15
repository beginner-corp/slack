import exec from './_exec'

export default function teamInfo(token, callback) {
  let err = typeof token === undefined? Error('team.info token undefined') : false
  if (err) {
    callback(err)
  }
  else {
    exec('team.info', {token}, callback)
  }
}
