import exec from './_exec'

export default function groupsSetPurpose(params, callback) {
  exec('groups.setPurpose', params, callback)
}
