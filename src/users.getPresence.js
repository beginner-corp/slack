import exec from './_exec'

export default function usersGetPresence(params, callback) {
  exec('users.getPresence', params, callback)
}
