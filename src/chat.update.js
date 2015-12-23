import exec from './_exec'
import validate from './_validate'

export default function chatUpdate(params, callback) {
  let ns = 'chat.update'
  let err = validate(ns, params, 'token', 'ts', 'channel', 'text')
  if (err) {
    callback(err)
  }
  else {
    exec(ns, params, callback)
  }
}
