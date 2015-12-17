import exec from './_exec'

export default function chatDelete(params, callback) {
  exec('chat.delete', params, callback)
}
