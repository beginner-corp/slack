import exec from './_exec'
import validate from './_validate'

export default function channelsSetPurpose(params, callback) {
  let ns = 'channels.setpurpose'
  let err = validate(ns, params, 'token', 'channel', 'purpose')
  if (err) {
    callback(err)
  }
  else {
    exec(ns, params, callback)
  }
}
