import exec from './_exec'

export default function groupsCreate(params, callback) {
  exec('groups.create', params, callback)
}
