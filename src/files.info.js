import exec from './_exec'

export default function filesInfo(params, callback) {
  exec('files.info', params, callback)
}
