import exec from './_exec'

export default function groupsHistory(params, callback) {
  exec('groups.history', params, callback)
}
