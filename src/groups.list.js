import exec from './_exec'

export default function groupsList(params, callback) {
  exec('groups.list', params, callback)
}
