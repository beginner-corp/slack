import exec from './_exec'

export default function channelsRename(params, callback) {
  exec('channels.rename', params, callback)
}
