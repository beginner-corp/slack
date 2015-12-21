import exec from './_exec'
import validate from './_validate'

export default function channelsKick(params, callback) {
  let ns = 'channels.kick'
  let err = validate(ns, params, 'token', 'channel', 'user')
  if (err) {
    callback(err)
  }
  else {
    exec(ns, params, callback)
  }
}
