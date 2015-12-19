import api from './api.test'
import test from './auth.test'
import channels from './channels'
import chat from './chat'
import emojiList from './emoji.list'
import files from './files'
import groups from './groups'
import im from './im'
import access from './oauth.access'
import reactions from './reactions'
import start from './rtm.start'
import search from './search'
import starsList from './stars.list'
import team from './team'
import users from './users'

let describe = `
  slack
    api.test(params, (err, data)=>)
    auth.test(token, (err, data)=>)
    oauth.access({client_id, client_secret, code}, (err, data)=>)
    team.info(token, (err, data)=>)
    users.list(token, (err, data)=>)
    channels.list({token, exclude_archived}, (err, data)=>)
    channels.history({token, channel}, (err, data)=>)
    rtm.start({token}, (err, data)=>)
    chat.postMessage({token, text, channel}, (err, data)=>)
`

export default {
  describe,
  api: {test:api},
  auth: {test},
  channels,
  chat,
  emoji: {list:emojiList},
  files,
  groups,
  im,
  oauth: {access},
  reactions,
  rtm: {start},
  search,
  stars: {starsList},
  team,
  users
}
