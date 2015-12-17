import exec from './_exec'

export default function channelsArchive(params, callback) {
  exec('channels.archive', params, callback)
}
