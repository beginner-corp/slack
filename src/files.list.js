import exec from './_exec'

export default function filesList(params, callback) {
  exec('files.list', params, callback)
}

