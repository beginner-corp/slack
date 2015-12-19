import exec from './_exec'
import validate from './_validate'

export default function mpimOpen(params, callback) {
  let ns = 'mpim.open' 
  let err = validate(ns, params, 'token', 'users')
  if (err) {
    callback(err)
  }
  else { 
    exec(ns, params, callback)
  }
}
