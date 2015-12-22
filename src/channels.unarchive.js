import exec from './_exec'
import validate from './_validate'

export default function channelsUnarchive(params, callback) {
  let ns = 'channels.setTopic'
  let err = validate(ns, params, 'token', 'channel')
  if (err) {
    callback(err)
  }
  else {
    exec(ns, params, callback)
  }
}
