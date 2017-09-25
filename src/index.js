import api from './api.test'
import apiClient from './api.client'
import bots from './bots'
import test from './auth.test'
import revoke from './auth.revoke'
import channels from './channels'
import chat from './chat'
import conversations from './conversations'
import dnd from './dnd'
import emojiList from './emoji.list'
import files from './files'
import groups from './groups'
import im from './im'
import info from './apps.permissions.info'
import request from './apps.permissions.request'
import mpim from './mpim'
import access from './oauth.access'
import token from './oauth.token'
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
  apps: {
    permissions: {info, request}
  },
  api: {test:api, client:apiClient},
  auth: {test, revoke},
  bots,
  channels,
  chat,
  conversations,
  dnd,
  emoji: {list:emojiList},
  files,
  groups,
  im,
  mpim,
  oauth: {access, token},
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
