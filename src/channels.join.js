import exec from './_exec'

export default function channelsJoin(params, callback) {
  exec('channels.join', params, callback)
}
