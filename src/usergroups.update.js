import exec from './_exec'
import validate from './_validate'

export default function usergroupsUpdate(params, callback) {
  let ns = 'usergroups.update'
  let err = validate(ns, params, 'token', 'usergroup')
  if (err) {
    callback(err)
  }
  else {
    exec(ns, params, callback)
  }
}
