import exec from './exec'

export default function usersList(token, callback) {
  exec('users.list', {token, presence:1}, callback)
}
