import exec from './_exec'

export default function groupsInfo(params, callback) {
  exec('groups.info', params, callback)
}
