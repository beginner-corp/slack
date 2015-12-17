import exec from './_exec'

export default function groupsInvite(params, callback) {
  exec('groups.invite', params, callback)
}
