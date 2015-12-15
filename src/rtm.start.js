import exec from './_exec'
import validate from './_validate'

export default function rtmStart(params, callback) {
  let err = validate('rtm.start', params, 'token')
  if (err) {
    callback(err)
  }
  else {
    exec('rtm.start', params, callback)
  }
}
