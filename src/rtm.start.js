import exec from './exec'
import req from './_required'

export default function rtmStart(params, callback) {
  let err = req('rtm.start', params, 'token')
  if (err) {
    callback(err)
  }
  else {
    exec('rtm.start', params, callback)
  }
}
