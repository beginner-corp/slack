import exec from './_exec'
import validate from './_validate'

export default function starsAdd(params, callback) {
  let ns = 'stars.add' 
  let err = validate(ns, params, 'token')
  if (err) {
    callback(err)
  }
  else { 
    exec(ns, params, callback)
  }
}
