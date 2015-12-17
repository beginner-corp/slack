import exec from './_exec'

export default function channelsSetTopic(params, callback) {
  exec('channels.setTopic', params, callback)
}
