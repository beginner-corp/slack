import exec from './_exec'

export default function groupsUnArchive(params, callback) {
  exec('groups.unarchive', params, callback)
}
