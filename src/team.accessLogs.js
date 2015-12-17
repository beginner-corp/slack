import exec from './_exec'

export default function teamAccessLogs(params, callback) {
  exec('team.accessLogs', params, callback)
}

