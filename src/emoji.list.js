import exec from './_exec'

export default function emojiList(params, callback) {
  exec('emoji.list', params, callback)
}
