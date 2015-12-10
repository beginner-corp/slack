import exec from './exec'

export default function chatPostMessage(params, callback) {
  exec('chat.postMessage', params, callback)
}
