import exec from './_exec'

export default function searchMessages(params, callback) {
  exec('search.messages', params, callback)
}
