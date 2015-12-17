import exec from './_exec'

export default function usersInfo(params, callback) {
  exec('users.info', params, callback)
}
