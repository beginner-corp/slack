import exec from './_exec'
import validate from './_validate'

export default function usergroupsDisable(params, callback) {
  let ns = 'usergroups.disable'
  let err = validate(ns, params, 'token', 'usergroup')
  if (err) {
    callback(err)
  }
  else {
    exec(ns, params, callback)
  }
}
