<h1 align="center">
  <img width="333px" src=https://s3-us-west-1.amazonaws.com/bugbot/slack-js.svg alt=slack title=slack width=178>
</h1>
<p align="center" style="font-size: 1.2rem;">
  <a href=https://www.npmjs.com/package/slack><img alt=npm src=https://badge.fury.io/js/slack.svg></a>
  <a href=https://github.com/smallwins/slack/actions?query=workflow%3A%22Node+CI%22><img alt="Node CI" src=https://github.com/smallwins/slack/workflows/Node%20CI/badge.svg></a>
  <img alt="coverage 93.85%" src=https://img.shields.io/badge/coverage-93.85%25-brightgreen.svg>
</p>

### A [Slack Web API](https://api.slack.com/methods) client :seedling::raised_hands::two_hearts:

- Written in modern JavaScript; tested for Node and the browser
- Complete support for the [Slack Web API](https://api.slack.com/methods)
- Perfect symmetry: JS method signatures match Web API docs
- Choose your async adventure: all methods accept either a Node style errback or return a `Promise`
- Opt into an OO style class instance that applies `token` to all methods
- Well tested, CI, and Apache2 licensed
- Only one dependency: `tiny-json-http`
- Tiny: **7kb** browserified/minified

## Install :star2::package:

```
npm i slack
```

# Usage :sparkles::rocket:

`slack` mirrors the published API docs exactly because its generated from those docs! The default interface are stateless functions and has remain unchanged since `1.0.0` and that will continue to be the case.

```javascript
var slack = require('slack')

// logs {args:{hello:'world'}}
slack.api.test({hello:'world'}, console.log)

// :new: opt into promises
slack.api.test({nice:1}).then(console.log).catch(console.log)
```

Due to popular demand an OO style is supported. For an instance of `Slack` all methods come prebound with the `token` parameter applied.

```javascript
const token = process.env.SLACK_BOT_TOKEN
const Slack = require('slack')
const bot = new Slack({token})

// logs {args:{hyper:'card'}}
bot.api.test({hyper:'card'}).then(console.log)
```

Using `async`/`await` in Node 8.x:

```javascript
let token = process.env.SLACK_BOT_TOKEN
let Slack = require('slack')
let bot = new Slack({token})

;(async function main() {
  // logs {args:{hyper:'card'}}
  var result = await bot.api.test({hyper:'card'})
  console.log(result)
})()
```

Choose whichever style works best for your project deployment needs and team preference. :hearts::beer:

### Error Handling

Some methods (like [`slack.dialog.open`](https://api.slack.com/methods/dialog.open)) provide additional context for errors through a `response_metadata` object. This will be exposed as a `messages` properties on the errors that are thrown.

```javascript
slack.dialog.open(options).catch(err => {
  console.log(err.messages)
})
```

### Specialized Electron Support

Electron ships its own HTTP module called `electron.net` which can have better performance and offers more extensive HTTP proxy handling. You can opt into Electron support by passing `useElectronNet:true` to the `Slack` constructor.

```javascript
import {app, BrowserWindow, net} from 'electron'
import Slack from 'slack'

const slack = new Slack({useElectronNet:true})
```

You can setup an HTTP authentication proxy logic by passing `login` to the constructor.

```javascript
function login(authInfo, callback) {
  callback('username', 'password')
}

const slack = new Slack({useElectronNet:true, login})
```

[Read more about `electron.net` from the source!](https://github.com/electron/electron/blob/master/docs/api/net.md)

### Test Setup :lock::key::point_left:

Clone this repo and create a file called `.env` in the root with the following:

```
SLACK_BOT_TOKEN=xxxx
SLACK_CLIENT_ID=xxxx
SLACK_CLIENT_SECRET=xxxx
```

You can get a `SLACK_TOKEN` for testing [here](https://api.slack.com/web). You need to register an app for a `SLACK_CLIENT_ID` and `SLACK_CLIENT_SECRET`. The tests require the app to have the following scopes, and for the target slack to have a `#test` channel:

- `channels:history`
- `channels:read`
- `chat:write:bot`
- `team:read`
- `users:read`

You can [read about bot tokens here](https://api.slack.com/docs/token-types#bot).

## Testing :green_heart::green_heart::green_heart:

:point_right: In Node:

```
npm test
```

:point_right: Or the browser:

```
npm run btest
```

# Slack Web API :tada::honeybee::triangular_flag_on_post:

The entire Slack Web API is supported. All method signatures accept a `params` object and either a Node style callback (an errback) or, if absent, it will return a `Promise`. Required params are documented inline below.

- [`slack.admin.apps.approve({token})`](https://api.slack.com/methods/admin.apps.approve)
- [`slack.admin.apps.approved.list({token})`](https://api.slack.com/methods/admin.apps.approved.list)
- [`slack.admin.apps.requests.list({token})`](https://api.slack.com/methods/admin.apps.requests.list)
- [`slack.admin.apps.restrict({token})`](https://api.slack.com/methods/admin.apps.restrict)
- [`slack.admin.apps.restricted.list({token})`](https://api.slack.com/methods/admin.apps.restricted.list)
- [`slack.admin.conversations.setTeams({channel_id, token})`](https://api.slack.com/methods/admin.conversations.setTeams)
- [`slack.admin.emoji.add({url, token, name})`](https://api.slack.com/methods/admin.emoji.add)
- [`slack.admin.emoji.addAlias({token, name, alias_for})`](https://api.slack.com/methods/admin.emoji.addAlias)
- [`slack.admin.emoji.list({token})`](https://api.slack.com/methods/admin.emoji.list)
- [`slack.admin.emoji.remove({token, name})`](https://api.slack.com/methods/admin.emoji.remove)
- [`slack.admin.emoji.rename({new_name, token, name})`](https://api.slack.com/methods/admin.emoji.rename)
- [`slack.admin.inviteRequests.approve({token, invite_request_id})`](https://api.slack.com/methods/admin.inviteRequests.approve)
- [`slack.admin.inviteRequests.approved.list({token})`](https://api.slack.com/methods/admin.inviteRequests.approved.list)
- [`slack.admin.inviteRequests.denied.list({token})`](https://api.slack.com/methods/admin.inviteRequests.denied.list)
- [`slack.admin.inviteRequests.deny({token, invite_request_id})`](https://api.slack.com/methods/admin.inviteRequests.deny)
- [`slack.admin.inviteRequests.list({token})`](https://api.slack.com/methods/admin.inviteRequests.list)
- [`slack.admin.teams.admins.list({token, team_id})`](https://api.slack.com/methods/admin.teams.admins.list)
- [`slack.admin.teams.create({team_domain, token, team_name})`](https://api.slack.com/methods/admin.teams.create)
- [`slack.admin.teams.list({token})`](https://api.slack.com/methods/admin.teams.list)
- [`slack.admin.teams.owners.list({token, team_id})`](https://api.slack.com/methods/admin.teams.owners.list)
- [`slack.admin.teams.settings.info({token, team_id})`](https://api.slack.com/methods/admin.teams.settings.info)
- [`slack.admin.teams.settings.setDefaultChannels({channel_ids, token, team_id})`](https://api.slack.com/methods/admin.teams.settings.setDefaultChannels)
- [`slack.admin.teams.settings.setDescription({token, team_id, description})`](https://api.slack.com/methods/admin.teams.settings.setDescription)
- [`slack.admin.teams.settings.setDiscoverability({token, team_id, discoverability})`](https://api.slack.com/methods/admin.teams.settings.setDiscoverability)
- [`slack.admin.teams.settings.setIcon({token, image_url, team_id})`](https://api.slack.com/methods/admin.teams.settings.setIcon)
- [`slack.admin.teams.settings.setName({token, team_id, name})`](https://api.slack.com/methods/admin.teams.settings.setName)
- [`slack.admin.users.assign({user_id, team_id, token})`](https://api.slack.com/methods/admin.users.assign)
- [`slack.admin.users.invite({channel_ids, team_id, token, email})`](https://api.slack.com/methods/admin.users.invite)
- [`slack.admin.users.list({token, team_id})`](https://api.slack.com/methods/admin.users.list)
- [`slack.admin.users.remove({token, user_id, team_id})`](https://api.slack.com/methods/admin.users.remove)
- [`slack.admin.users.session.reset({token, user_id})`](https://api.slack.com/methods/admin.users.session.reset)
- [`slack.admin.users.setAdmin({token, user_id, team_id})`](https://api.slack.com/methods/admin.users.setAdmin)
- [`slack.admin.users.setExpiration({expiration_ts, token, user_id, team_id})`](https://api.slack.com/methods/admin.users.setExpiration)
- [`slack.admin.users.setOwner({token, user_id, team_id})`](https://api.slack.com/methods/admin.users.setOwner)
- [`slack.admin.users.setRegular({token, user_id, team_id})`](https://api.slack.com/methods/admin.users.setRegular)
- [`slack.api.test({})`](https://api.slack.com/methods/api.test)
- [`slack.apps.permissions.info({})`](https://api.slack.com/methods/apps.permissions.info)
- [`slack.apps.permissions.request({scopes, token, trigger_id})`](https://api.slack.com/methods/apps.permissions.request)
- [`slack.apps.permissions.resources.list({token})`](https://api.slack.com/methods/apps.permissions.resources.list)
- [`slack.apps.permissions.scopes.list({token})`](https://api.slack.com/methods/apps.permissions.scopes.list)
- [`slack.apps.permissions.users.list({token})`](https://api.slack.com/methods/apps.permissions.users.list)
- [`slack.apps.permissions.users.request({scopes, token, user, trigger_id})`](https://api.slack.com/methods/apps.permissions.users.request)
- [`slack.apps.uninstall({})`](https://api.slack.com/methods/apps.uninstall)
- [`slack.auth.revoke({token})`](https://api.slack.com/methods/auth.revoke)
- [`slack.auth.test({token})`](https://api.slack.com/methods/auth.test)
- [`slack.bots.info({token})`](https://api.slack.com/methods/bots.info)
- [`slack.channels.archive({})`](https://api.slack.com/methods/channels.archive)
- [`slack.channels.create({})`](https://api.slack.com/methods/channels.create)
- [`slack.channels.history({})`](https://api.slack.com/methods/channels.history)
- [`slack.channels.info({})`](https://api.slack.com/methods/channels.info)
- [`slack.channels.invite({})`](https://api.slack.com/methods/channels.invite)
- [`slack.channels.join({})`](https://api.slack.com/methods/channels.join)
- [`slack.channels.kick({})`](https://api.slack.com/methods/channels.kick)
- [`slack.channels.leave({})`](https://api.slack.com/methods/channels.leave)
- [`slack.channels.list({})`](https://api.slack.com/methods/channels.list)
- [`slack.channels.mark({})`](https://api.slack.com/methods/channels.mark)
- [`slack.channels.rename({})`](https://api.slack.com/methods/channels.rename)
- [`slack.channels.replies({})`](https://api.slack.com/methods/channels.replies)
- [`slack.channels.setPurpose({token, purpose, channel})`](https://api.slack.com/methods/channels.setPurpose)
- [`slack.channels.setTopic({topic, token, channel})`](https://api.slack.com/methods/channels.setTopic)
- [`slack.channels.unarchive({token, channel})`](https://api.slack.com/methods/channels.unarchive)
- [`slack.chat.delete({})`](https://api.slack.com/methods/chat.delete)
- [`slack.chat.deleteScheduledMessage({token, channel, scheduled_message_id})`](https://api.slack.com/methods/chat.deleteScheduledMessage)
- [`slack.chat.getPermalink({token, message_ts, channel})`](https://api.slack.com/methods/chat.getPermalink)
- [`slack.chat.meMessage({})`](https://api.slack.com/methods/chat.meMessage)
- [`slack.chat.postEphemeral({token, user, channel})`](https://api.slack.com/methods/chat.postEphemeral)
- [`slack.chat.postMessage({channel, token})`](https://api.slack.com/methods/chat.postMessage)
- [`slack.chat.scheduleMessage({})`](https://api.slack.com/methods/chat.scheduleMessage)
- [`slack.chat.scheduledMessages.list({})`](https://api.slack.com/methods/chat.scheduledMessages.list)
- [`slack.chat.unfurl({ts, token, channel})`](https://api.slack.com/methods/chat.unfurl)
- [`slack.chat.update({ts, token, channel})`](https://api.slack.com/methods/chat.update)
- [`slack.conversations.archive({})`](https://api.slack.com/methods/conversations.archive)
- [`slack.conversations.close({})`](https://api.slack.com/methods/conversations.close)
- [`slack.conversations.create({})`](https://api.slack.com/methods/conversations.create)
- [`slack.conversations.history({})`](https://api.slack.com/methods/conversations.history)
- [`slack.conversations.info({})`](https://api.slack.com/methods/conversations.info)
- [`slack.conversations.invite({})`](https://api.slack.com/methods/conversations.invite)
- [`slack.conversations.join({})`](https://api.slack.com/methods/conversations.join)
- [`slack.conversations.kick({})`](https://api.slack.com/methods/conversations.kick)
- [`slack.conversations.leave({})`](https://api.slack.com/methods/conversations.leave)
- [`slack.conversations.list({})`](https://api.slack.com/methods/conversations.list)
- [`slack.conversations.members({})`](https://api.slack.com/methods/conversations.members)
- [`slack.conversations.open({})`](https://api.slack.com/methods/conversations.open)
- [`slack.conversations.rename({})`](https://api.slack.com/methods/conversations.rename)
- [`slack.conversations.replies({})`](https://api.slack.com/methods/conversations.replies)
- [`slack.conversations.setPurpose({})`](https://api.slack.com/methods/conversations.setPurpose)
- [`slack.conversations.setTopic({})`](https://api.slack.com/methods/conversations.setTopic)
- [`slack.conversations.unarchive({})`](https://api.slack.com/methods/conversations.unarchive)
- [`slack.dialog.open({token, trigger_id, dialog})`](https://api.slack.com/methods/dialog.open)
- [`slack.dnd.endDnd({token})`](https://api.slack.com/methods/dnd.endDnd)
- [`slack.dnd.endSnooze({token})`](https://api.slack.com/methods/dnd.endSnooze)
- [`slack.dnd.info({})`](https://api.slack.com/methods/dnd.info)
- [`slack.dnd.setSnooze({num_minutes, token})`](https://api.slack.com/methods/dnd.setSnooze)
- [`slack.dnd.teamInfo({})`](https://api.slack.com/methods/dnd.teamInfo)
- [`slack.emoji.list({token})`](https://api.slack.com/methods/emoji.list)
- [`slack.files.comments.delete({})`](https://api.slack.com/methods/files.comments.delete)
- [`slack.files.delete({})`](https://api.slack.com/methods/files.delete)
- [`slack.files.info({})`](https://api.slack.com/methods/files.info)
- [`slack.files.list({})`](https://api.slack.com/methods/files.list)
- [`slack.files.remote.add({})`](https://api.slack.com/methods/files.remote.add)
- [`slack.files.remote.info({})`](https://api.slack.com/methods/files.remote.info)
- [`slack.files.remote.list({})`](https://api.slack.com/methods/files.remote.list)
- [`slack.files.remote.remove({})`](https://api.slack.com/methods/files.remote.remove)
- [`slack.files.remote.share({})`](https://api.slack.com/methods/files.remote.share)
- [`slack.files.remote.update({})`](https://api.slack.com/methods/files.remote.update)
- [`slack.files.revokePublicURL({})`](https://api.slack.com/methods/files.revokePublicURL)
- [`slack.files.sharedPublicURL({})`](https://api.slack.com/methods/files.sharedPublicURL)
- [`slack.files.upload({})`](https://api.slack.com/methods/files.upload)
- [`slack.groups.archive({})`](https://api.slack.com/methods/groups.archive)
- [`slack.groups.create({})`](https://api.slack.com/methods/groups.create)
- [`slack.groups.createChild({})`](https://api.slack.com/methods/groups.createChild)
- [`slack.groups.history({})`](https://api.slack.com/methods/groups.history)
- [`slack.groups.info({})`](https://api.slack.com/methods/groups.info)
- [`slack.groups.invite({})`](https://api.slack.com/methods/groups.invite)
- [`slack.groups.kick({token, user, channel})`](https://api.slack.com/methods/groups.kick)
- [`slack.groups.leave({token, channel})`](https://api.slack.com/methods/groups.leave)
- [`slack.groups.list({})`](https://api.slack.com/methods/groups.list)
- [`slack.groups.mark({})`](https://api.slack.com/methods/groups.mark)
- [`slack.groups.open({})`](https://api.slack.com/methods/groups.open)
- [`slack.groups.rename({})`](https://api.slack.com/methods/groups.rename)
- [`slack.groups.replies({})`](https://api.slack.com/methods/groups.replies)
- [`slack.groups.setPurpose({})`](https://api.slack.com/methods/groups.setPurpose)
- [`slack.groups.setTopic({})`](https://api.slack.com/methods/groups.setTopic)
- [`slack.groups.unarchive({})`](https://api.slack.com/methods/groups.unarchive)
- [`slack.im.close({token, channel})`](https://api.slack.com/methods/im.close)
- [`slack.im.history({})`](https://api.slack.com/methods/im.history)
- [`slack.im.list({})`](https://api.slack.com/methods/im.list)
- [`slack.im.mark({token, channel, ts})`](https://api.slack.com/methods/im.mark)
- [`slack.im.open({})`](https://api.slack.com/methods/im.open)
- [`slack.im.replies({})`](https://api.slack.com/methods/im.replies)
- [`slack.migration.exchange({token, users})`](https://api.slack.com/methods/migration.exchange)
- [`slack.mpim.close({token, channel})`](https://api.slack.com/methods/mpim.close)
- [`slack.mpim.history({})`](https://api.slack.com/methods/mpim.history)
- [`slack.mpim.list({})`](https://api.slack.com/methods/mpim.list)
- [`slack.mpim.mark({})`](https://api.slack.com/methods/mpim.mark)
- [`slack.mpim.open({})`](https://api.slack.com/methods/mpim.open)
- [`slack.mpim.replies({})`](https://api.slack.com/methods/mpim.replies)
- [`slack.oauth.access({})`](https://api.slack.com/methods/oauth.access)
- [`slack.oauth.token({})`](https://api.slack.com/methods/oauth.token)
- [`slack.oauth.v2.access({code})`](https://api.slack.com/methods/oauth.v2.access)
- [`slack.pins.add({})`](https://api.slack.com/methods/pins.add)
- [`slack.pins.list({})`](https://api.slack.com/methods/pins.list)
- [`slack.pins.remove({})`](https://api.slack.com/methods/pins.remove)
- [`slack.reactions.add({timestamp, token, name, channel})`](https://api.slack.com/methods/reactions.add)
- [`slack.reactions.get({token})`](https://api.slack.com/methods/reactions.get)
- [`slack.reactions.list({token})`](https://api.slack.com/methods/reactions.list)
- [`slack.reactions.remove({name, token})`](https://api.slack.com/methods/reactions.remove)
- [`slack.reminders.add({})`](https://api.slack.com/methods/reminders.add)
- [`slack.reminders.complete({})`](https://api.slack.com/methods/reminders.complete)
- [`slack.reminders.delete({})`](https://api.slack.com/methods/reminders.delete)
- [`slack.reminders.info({})`](https://api.slack.com/methods/reminders.info)
- [`slack.reminders.list({})`](https://api.slack.com/methods/reminders.list)
- [`slack.rtm.connect({token})`](https://api.slack.com/methods/rtm.connect)
- [`slack.search.messages({query, token})`](https://api.slack.com/methods/search.messages)
- [`slack.stars.add({token})`](https://api.slack.com/methods/stars.add)
- [`slack.stars.list({})`](https://api.slack.com/methods/stars.list)
- [`slack.stars.remove({})`](https://api.slack.com/methods/stars.remove)
- [`slack.team.accessLogs({token})`](https://api.slack.com/methods/team.accessLogs)
- [`slack.team.billableInfo({token})`](https://api.slack.com/methods/team.billableInfo)
- [`slack.team.info({token})`](https://api.slack.com/methods/team.info)
- [`slack.team.integrationLogs({token})`](https://api.slack.com/methods/team.integrationLogs)
- [`slack.team.profile.get({token})`](https://api.slack.com/methods/team.profile.get)
- [`slack.usergroups.create({token, name})`](https://api.slack.com/methods/usergroups.create)
- [`slack.usergroups.disable({token, usergroup})`](https://api.slack.com/methods/usergroups.disable)
- [`slack.usergroups.enable({token, usergroup})`](https://api.slack.com/methods/usergroups.enable)
- [`slack.usergroups.list({token})`](https://api.slack.com/methods/usergroups.list)
- [`slack.usergroups.update({token, usergroup})`](https://api.slack.com/methods/usergroups.update)
- [`slack.usergroups.users.list({token, usergroup})`](https://api.slack.com/methods/usergroups.users.list)
- [`slack.usergroups.users.update({users, token, usergroup})`](https://api.slack.com/methods/usergroups.users.update)
- [`slack.users.conversations({})`](https://api.slack.com/methods/users.conversations)
- [`slack.users.deletePhoto({token})`](https://api.slack.com/methods/users.deletePhoto)
- [`slack.users.getPresence({token})`](https://api.slack.com/methods/users.getPresence)
- [`slack.users.identity({})`](https://api.slack.com/methods/users.identity)
- [`slack.users.info({token})`](https://api.slack.com/methods/users.info)
- [`slack.users.list({})`](https://api.slack.com/methods/users.list)
- [`slack.users.lookupByEmail({})`](https://api.slack.com/methods/users.lookupByEmail)
- [`slack.users.profile.get({})`](https://api.slack.com/methods/users.profile.get)
- [`slack.users.profile.set({})`](https://api.slack.com/methods/users.profile.set)
- [`slack.users.setActive({token})`](https://api.slack.com/methods/users.setActive)
- [`slack.users.setPhoto({})`](https://api.slack.com/methods/users.setPhoto)
- [`slack.users.setPresence({token, presence})`](https://api.slack.com/methods/users.setPresence)
- [`slack.views.open({token, trigger_id, view})`](https://api.slack.com/methods/views.open)
- [`slack.views.publish({token, user_id, view})`](https://api.slack.com/methods/views.publish)
- [`slack.views.push({token, trigger_id, view})`](https://api.slack.com/methods/views.push)
- [`slack.views.update({token})`](https://api.slack.com/methods/views.update)

# Contributing

The code for the client is generated by scraping the [Slack Web API documentation](https://api.slack.com/methods).
Regenerate from the latest Slack documentation by running :runner::

```
npm run generate
```

Portions of this README are generated as well; to make edits, update `readme.tmpl`
and run the same command :cloud::umbrella::sunny::sunflower:.
