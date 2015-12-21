import exec from './_exec'
import validate from './_validate'

export default function channelsLeave(params, callback) {
  let ns = 'channels.leave'
  let err = validate(ns, params, 'token', 'channel')
  if (err) {
    callback(err)
  }
  else {
    exec(ns, params, callback)
  }
}
