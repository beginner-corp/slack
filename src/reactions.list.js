import exec from './_exec'

export default function reactionsList(params, callback) {
  exec('reactions.list', params, callback)
}
