import exec from './_exec'

export default function searchFiles(params, callback) {
  exec('search.files', params, callback)
}
