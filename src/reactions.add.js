import exec from './_exec'

export default function reactionsAdd(params, callback) {
  exec('reactions.add', params, callback)
}
