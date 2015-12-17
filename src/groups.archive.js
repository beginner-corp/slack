import exec from './_exec'

export default function groupsArchive(params, callback) {
  exec('groups.archive', params, callback)
}
