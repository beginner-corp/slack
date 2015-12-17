import exec from './_exec'

export default function usersSetPresence(params, callback) {
  exec('users.setPresence', params, callback)
}

