import exec from './_exec'

export default function searchAll(params, callback) {
  exec('search.all', params, callback)
}

