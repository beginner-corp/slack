import exec from './_exec'
import validate from './_validate'

export default function usergroupsUsersUpdate(params, callback) {
  let ns = 'usergroups.users.update'
  let err = validate(ns, params, 'token', 'usergroup', 'users')
  if (err) {
    callback(err)
  }
  else {
    exec(ns, params, callback)
  }
}


