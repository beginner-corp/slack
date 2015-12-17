import exec from './_exec'

export default function filesDelete(params, callback) {
  exec('files.delete', params, callback)
}
