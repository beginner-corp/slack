import exec from './_exec'

export default function reactionsRemove(params, callback) {
  exec('reactions.remove', params, callback)
}
