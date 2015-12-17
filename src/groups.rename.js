import exec from './_exec'

export default function groupsRename(params, callback) {
  exec('groups.rename', params, callback)
}
