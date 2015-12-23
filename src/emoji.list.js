import exec from './_exec'

export default function emojiList(token, callback) {
  exec('emoji.list', token, callback)
}
