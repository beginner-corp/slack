import exec from './_exec'
import validate from './_validate'

export default function channelsRename(params, callback) {
  let ns = 'channels.rename'
  let err = validate(ns, params, 'token', 'channel', 'name')
  if (err) {
    callback(err)
  }
  else {
    exec(ns, params, callback)
  }
}
