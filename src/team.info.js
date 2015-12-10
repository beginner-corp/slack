import exec from './exec'

export default function teamInfo(token, callback) {
  exec('team.info', {token}, callback)
}
