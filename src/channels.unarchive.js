import exec from './_exec'

export default function channelsUnarchive(params, callback) {
  exec('channels.unarchive', params, callback)
}
