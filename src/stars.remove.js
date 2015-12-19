import exec from './_exec'
import validate from './_validate'

export default function starsRemove(params, callback) {
  let ns = 'stars.remove' 
  let err = validate(ns, params, 'token')
  if (err) {
    callback(err)
  }
  else { 
    exec(ns, params, callback)
  }
}
