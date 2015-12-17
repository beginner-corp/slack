import exec from './_exec'

export default function channelsCreate(params, callback) {
  exec('channels.create', params, callback)
}
