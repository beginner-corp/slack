import exec from './_exec'
import validate from './_validate'

export default function channelsCreate(params, callback) {
  let ns = 'channels.create' 
  let err = validate(ns, params, 'token', 'name')
  if (err) {
    callback(err)
  }
  else { 
    exec(ns, params, callback)
  }
}
