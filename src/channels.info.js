import exec from './_exec'
import validate from './_validate'

export default function channelsInfo(params, callback) {
  let ns = 'channels.info'
  let err = validate(ns, params, 'token', 'channel')
  if (err) {
    callback(err)
  }
  else {
    exec(ns, params, callback)
  }
}
