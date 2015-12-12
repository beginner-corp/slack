import exec from './exec'
import req from './_required'

export default function channelsHistory(params, callback) {
  let err = req('channels.history', params, 'token', 'channel')
  if (err) {
    callback(err)
  }
  else {
    exec('channels.history', params, callback)
  }
}
