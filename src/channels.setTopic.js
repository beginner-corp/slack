import exec from './_exec'
import validate from './_validate'

export default function channelsSetTopic(params, callback) {
  let ns = 'channels.setTopic'
  let err = validate(ns, params, 'token', 'channel', 'topic')
  if (err) {
    callback(err)
  }
  else {
    exec(ns, params, callback)
  }
}
