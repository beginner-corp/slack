import exec from './_exec'

export default function groupsLeave(params, callback) {
  exec('groups.leave', params, callback)
}
