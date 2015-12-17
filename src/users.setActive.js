import exec from './_exec'

export default function usersSetActive(params, callback) {
  exec('users.setActive', params, callback)
}
