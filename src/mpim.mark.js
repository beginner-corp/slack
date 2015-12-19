import exec from './_exec'
import validate from './_validate'

export default function mpimMark(params, callback) {
  let ns = 'mpim.mark' 
  let err = validate(ns, params, 'token', 'channel', 'ts')
  if (err) {
    callback(err)
  }
  else { 
    exec(ns, params, callback)
  }
}
