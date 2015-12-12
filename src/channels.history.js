import exec from './exec'

export default function channelsHistory(params, callback) {
  exec('channels.history', params, callback)
}
