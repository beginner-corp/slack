import exec from './_exec'
import validate from './_validate'

export default function pinsRemove(params, callback) {
  let ns = 'pins.remove' 
  let err = validate(ns, params, 'token', 'channel')
  if (err) {
    callback(err)
  }
  else { 
    exec(ns, params, callback)
  }
}
