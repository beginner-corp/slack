import exec from './_exec'

export default function reactionsGet(params, callback) {
  exec('reactions.get', params, callback)
}

