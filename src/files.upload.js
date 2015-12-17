import exec from './_exec'

export default function filesUpload(params, callback) {
  exec('files.upload', params, callback)
}
