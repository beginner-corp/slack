import exec from './_exec'
import validate from './_validate'

export default function pinsList(params, callback) {
  let ns = 'pins.list' 
  let err = validate(ns, params, 'token', 'channel')
  if (err) {
    callback(err)
  }
  else { 
    exec(ns, params, callback)
  }
}
