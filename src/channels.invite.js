import exec from './_exec'

export default function channelsInvite(params, callback) {
  exec('channels.invite', params, callback)
}
