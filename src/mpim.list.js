import exec from './_exec'
import validate from './_validate'

export default function mpimList(params, callback) {
  let ns = 'mpim.list' 
  let err = validate(ns, params, 'token')
  if (err) {
    callback(err)
  }
  else { 
    exec(ns, params, callback)
  }
}

