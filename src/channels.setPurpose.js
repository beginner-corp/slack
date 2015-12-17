import exec from './_exec'

export default function channelsSetPurpose(params, callback) {
  exec('channels.setPurpose', params, callback)
}
