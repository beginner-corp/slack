import exec from './_exec'
import validate from './_validate'

export default function mpimClose(params, callback) {
  let ns = 'mpim.close' 
  let err = validate(ns, params, 'token', 'channel')
  if (err) {
    callback(err)
  }
  else { 
    exec(ns, params, callback)
  }
}

