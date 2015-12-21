import exec from './_exec'
import validate from './_validate'

export default function channelsMark(params, callback) {
  let ns = 'channels.mark'
  let err = validate(ns, params, 'token', 'channel', 'ts')
  if (err) {
    callback(err)
  }
  else {
    exec(ns, params, callback)
  }
}
