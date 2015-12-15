import exec from './_exec'

export default function channelsList(params, callback) {
  let err = typeof params.token === 'undefined'? Error('channels.list missing token') : false
  if (err) {
    callback(err)
  }
  else {
   exec('channels.list', params, callback)
  }
}
