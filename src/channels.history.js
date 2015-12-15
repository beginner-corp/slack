import exec from './_exec'
import validate from './_validate'

export default function channelsHistory(params, callback) {
  let err = validate('channels.history', params, 'token', 'channel')
  if (err) {
    callback(err)
  }
  else {
    exec('channels.history', params, callback)
  }
}
