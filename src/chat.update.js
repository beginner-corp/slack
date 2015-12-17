import exec from './_exec'

export default function chatUpdate(params, callback) {
  exec('chat.update', params, callback)
}
