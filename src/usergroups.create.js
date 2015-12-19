import exec from './_exec'
import validate from './_validate'

export default function usergroupsCreate(params, callback) {
  let ns = 'usergroups.create'
  let err = validate(ns, params, 'token', 'name')
  if (err) {
    callback(err)
  }
  else {
    exec(ns, params, callback)
  }
}
