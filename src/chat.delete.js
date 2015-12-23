import exec from './_exec'
import validate from './_validate'

export default function chatDelete(params, callback) {
  let ns = 'chat.delete'
  let err = validate(ns, params, 'token', 'ts', 'channel')
  if (err) {
    callback(err)
  }
  else {
    exec(ns, params, callback)
  }
}
