import api from './api.test'
import apiClient from './api.client'
import bots from './bots'
import test from './auth.test'
import revoke from './auth.revoke'
import channels from './channels'
import chat from './chat'
import dnd from './dnd'
import emojiList from './emoji.list'
import files from './files'
import groups from './groups'
import im from './im'
import mpim from './mpim'
import access from './oauth.access'
import reactions from './reactions'
import reminders from './reminders'
import pins from './pins'
import client from './rtm.client'
import start from './rtm.start'
import connect from './rtm.connect'
import search from './search'
import stars from './stars'
import team from './team'
import usergroups from './usergroups'
import users from './users'

export default {
  api: {test:api, client:apiClient},
  auth: {test, revoke},
  bots,
  channels,
  chat,
  dnd,
  emoji: {list:emojiList},
  files,
  groups,
  im,
  mpim,
  oauth: {access},
  reactions,
  reminders,
  pins,
  rtm: {client, start, connect},
  search,
  stars,
  team,
  usergroups,
  users
}
