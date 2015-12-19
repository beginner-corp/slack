import exec from './_exec'

export default function starsRemove(params, callback) {
  exec('stars.remove', params, callback)
}
