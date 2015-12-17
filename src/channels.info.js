import exec from './_exec'

export default function channelsInfo(params, callback) {
  exec('channels.info', params, callback)
}
