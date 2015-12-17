import exec from './_exec'

export default function channelsKick(params, callback) {
  exec('channels.kick', params, callback)
}
