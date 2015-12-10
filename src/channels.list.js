import exec from './exec'

export default function channelsList(params, callback) {
  exec('channels.list', params, callback)
}
