import exec from './_exec'
import validate from './_validate'

export default function mpimHistory(params, callback) {
  let ns = 'mpim.history' 
  let err = validate(ns, params, 'token', 'channel')
  if (err) {
    callback(err)
  }
  else { 
    exec(ns, params, callback)
  }
}
