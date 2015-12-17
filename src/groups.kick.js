import exec from './_exec'

export default function groupsKick(params, callback) {
  exec('groups.kick', params, callback)
}
