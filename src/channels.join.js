import exec from './_exec'
import validate from './_validate'

export default function channelsJoin(params, callback) {
  let ns = 'channels.join'
  let err = validate(ns, params, 'token', 'name')
  if (err) {
    callback(err)
  }
  else {
    exec(ns, params, callback)
  }
}
