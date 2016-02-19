import api from './api.test'
import apiClient from './api.client'
import test from './auth.test'
import channels from './channels'
import chat from './chat'
import emojiList from './emoji.list'
import files from './files'
import groups from './groups'
import im from './im'
import mpim from './mpim'
import access from './oauth.access'
import reactions from './reactions'
import pins from './pins'
import client from './rtm.client'
import start from './rtm.start'
import search from './search'
import stars from './stars'
import team from './team'
import usergroups from './usergroups'
import users from './users'

let describe = `
  slack
    api.client(token)
    api.test(params, (err, data)=>)
    auth.test(token, (err, data)=>)
    channels.archive({token, channel}, (err, data)=>)
    channels.create({token, name}, (err, data)=>)
    channels.history({token, channel}, (err, data)=>)
    channels.info
    channels.invite
    channels.join
    channels.kick
    channels.leave
    channels.list({token, exclude_archived}, (err, data)=>)
    channels.mark
    channels.rename
    channels.setPurpose
    channels.setTopic
    channels.unarchive
    chat.delete
    chat.postMessage({token, text, channel}, (err, data)=>)
    chat.update
    emoji.list
    files.delete
    files.info
    files.list
    files.upload
    groups.archive
    groups.close
    groups.create
    groups.createChild
    groups.history
    groups.info
    groups.invite
    groups.kick
    groups.leave
    groups.list
    groups.mark
    groups.open
    groups.rename
    groups.setPurpose
    groups.setTopic
    groups.unarchive
    im.close
    im.history
    im.list
    im.mark
    im.open
    mpim.close
    mpim.history
    mpim.list
    mpim.mark
    mpim.open
    oauth.access({client_id, client_secret, code}, (err, data)=>)
    pins.add
    pins.list
    pins.remove
    reactions.add
    reactions.get
    reactions.list
    reactions.remove
    rtm.client()
    rtm.start({token}, (err, data)=>)
    search.all
    search.files
    search.messages
    stars.add
    stars.list
    stars.remove
    team.acccessLogs
    team.info(token, (err, data)=>)
    usergroups.create
    usergroups.disable
    usergroups.enable
    usergroups.list
    usergroups.update
    usergroups.users.list
    usergroups.users.update
    users.getPresence
    users.info
    users.list(token, (err, data)=>)
    users.setActive
    users.setPresence
`

export default {
  describe,
  api: {test:api, client:apiClient},
  auth: {test},
  channels,
  chat,
  emoji: {list:emojiList},
  files,
  groups,
  im,
  mpim,
  oauth: {access},
  reactions,
  pins,
  rtm: {client, start},
  search,
  stars,
  team,
  usergroups,
  users
}
