import exec from './_exec'

export default function channelsLeave(params, callback) {
  exec('channels.leave', params, callback)
}
