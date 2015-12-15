import exec from './_exec'
import validate from './_validate'

export default function chatPostMessage(params, callback) {
  let err = validate('chat.postMessage', params, 'text', 'channel', 'token')
  if (err) {
    callback(err)
  }
  else {
    exec('chat.postMessage', params, callback)
  }
}
