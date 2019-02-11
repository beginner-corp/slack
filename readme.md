<h1 align="center">
  <img width="333px" src=https://s3-us-west-1.amazonaws.com/bugbot/slack-js.svg alt=slack title=slack width=178>
</h1>
<p align="center" style="font-size: 1.2rem;">
  <a href=https://www.npmjs.com/package/slack><img alt=npm src=https://badge.fury.io/js/slack.svg></a>
  <a href=https://codeship.com/projects/121411><img alt=codeship src=https://img.shields.io/codeship/3fd641e0-81f4-0133-c733-22940a7a47c6.svg></a>
  <a href=><img alt="coverage 93.85%" src=https://img.shields.io/badge/coverage-93.85%25-brightgreen.svg></a>
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

You can get a `SLACK_TOKEN` for testing [here](https://api.slack.com/web). You need to register an app for a `SLACK_CLIENT_ID` and `SLACK_CLIENT_SECRET`. The tests require the app to have the `channels:history` scope. You can [read about bot tokens here](https://api.slack.com/docs/token-types#bot).

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

- [`slack.api.test({})`](https://api.slack.com/methods/api.test)
- [`slack.apps.permissions.info({token})`](https://api.slack.com/methods/apps.permissions.info)
- [`slack.apps.permissions.request({token, scopes, trigger_id})`](https://api.slack.com/methods/apps.permissions.request)
- [`slack.apps.permissions.resources.list({token})`](https://api.slack.com/methods/apps.permissions.resources.list)
- [`slack.apps.permissions.scopes.list({token})`](https://api.slack.com/methods/apps.permissions.scopes.list)
- [`slack.apps.permissions.users.list({token})`](https://api.slack.com/methods/apps.permissions.users.list)
- [`slack.apps.permissions.users.request({token, scopes, trigger_id, user})`](https://api.slack.com/methods/apps.permissions.users.request)
- [`slack.apps.uninstall({token, client_id, client_secret})`](https://api.slack.com/methods/apps.uninstall)
- [`slack.auth.revoke({token})`](https://api.slack.com/methods/auth.revoke)
- [`slack.auth.test({token})`](https://api.slack.com/methods/auth.test)
- [`slack.bots.info({token})`](https://api.slack.com/methods/bots.info)
- [`slack.channels.archive({token, channel})`](https://api.slack.com/methods/channels.archive)
- [`slack.channels.create({token, name})`](https://api.slack.com/methods/channels.create)
- [`slack.channels.history({token, channel})`](https://api.slack.com/methods/channels.history)
- [`slack.channels.info({token, channel})`](https://api.slack.com/methods/channels.info)
- [`slack.channels.invite({token, channel, user})`](https://api.slack.com/methods/channels.invite)
- [`slack.channels.join({token, name})`](https://api.slack.com/methods/channels.join)
- [`slack.channels.kick({token, channel, user})`](https://api.slack.com/methods/channels.kick)
- [`slack.channels.leave({token, channel})`](https://api.slack.com/methods/channels.leave)
- [`slack.channels.list({token})`](https://api.slack.com/methods/channels.list)
- [`slack.channels.mark({token, channel, ts})`](https://api.slack.com/methods/channels.mark)
- [`slack.channels.rename({token, channel, name})`](https://api.slack.com/methods/channels.rename)
- [`slack.channels.replies({token, channel, thread_ts})`](https://api.slack.com/methods/channels.replies)
- [`slack.channels.setPurpose({token, channel, purpose})`](https://api.slack.com/methods/channels.setPurpose)
- [`slack.channels.setTopic({token, channel, topic})`](https://api.slack.com/methods/channels.setTopic)
- [`slack.channels.unarchive({token, channel})`](https://api.slack.com/methods/channels.unarchive)
- [`slack.chat.delete({token, channel, ts})`](https://api.slack.com/methods/chat.delete)
- [`slack.chat.getPermalink({token, channel, message_ts})`](https://api.slack.com/methods/chat.getPermalink)
- [`slack.chat.meMessage({token, channel, text})`](https://api.slack.com/methods/chat.meMessage)
- [`slack.chat.postEphemeral({token, channel, text, user})`](https://api.slack.com/methods/chat.postEphemeral)
- [`slack.chat.postMessage({token, channel, text})`](https://api.slack.com/methods/chat.postMessage)
- [`slack.chat.unfurl({token, channel, ts, unfurls})`](https://api.slack.com/methods/chat.unfurl)
- [`slack.chat.update({token, channel, text, ts})`](https://api.slack.com/methods/chat.update)
- [`slack.conversations.archive({token, channel})`](https://api.slack.com/methods/conversations.archive)
- [`slack.conversations.close({token, channel})`](https://api.slack.com/methods/conversations.close)
- [`slack.conversations.create({token, name})`](https://api.slack.com/methods/conversations.create)
- [`slack.conversations.history({token, channel})`](https://api.slack.com/methods/conversations.history)
- [`slack.conversations.info({token, channel})`](https://api.slack.com/methods/conversations.info)
- [`slack.conversations.invite({token, channel, users})`](https://api.slack.com/methods/conversations.invite)
- [`slack.conversations.join({token, channel})`](https://api.slack.com/methods/conversations.join)
- [`slack.conversations.kick({token, channel, user})`](https://api.slack.com/methods/conversations.kick)
- [`slack.conversations.leave({token, channel})`](https://api.slack.com/methods/conversations.leave)
- [`slack.conversations.list({token})`](https://api.slack.com/methods/conversations.list)
- [`slack.conversations.members({token, channel})`](https://api.slack.com/methods/conversations.members)
- [`slack.conversations.open({token})`](https://api.slack.com/methods/conversations.open)
- [`slack.conversations.rename({token, channel, name})`](https://api.slack.com/methods/conversations.rename)
- [`slack.conversations.replies({token, channel, ts})`](https://api.slack.com/methods/conversations.replies)
- [`slack.conversations.setPurpose({token, channel, purpose})`](https://api.slack.com/methods/conversations.setPurpose)
- [`slack.conversations.setTopic({token, channel, topic})`](https://api.slack.com/methods/conversations.setTopic)
- [`slack.conversations.unarchive({token, channel})`](https://api.slack.com/methods/conversations.unarchive)
- [`slack.dialog.open({token, dialog, trigger_id})`](https://api.slack.com/methods/dialog.open)
- [`slack.dnd.endDnd({token})`](https://api.slack.com/methods/dnd.endDnd)
- [`slack.dnd.endSnooze({token})`](https://api.slack.com/methods/dnd.endSnooze)
- [`slack.dnd.info({token})`](https://api.slack.com/methods/dnd.info)
- [`slack.dnd.setSnooze({token, num_minutes})`](https://api.slack.com/methods/dnd.setSnooze)
- [`slack.dnd.teamInfo({token})`](https://api.slack.com/methods/dnd.teamInfo)
- [`slack.emoji.list({token})`](https://api.slack.com/methods/emoji.list)
- [`slack.files.comments.add({token, comment, file})`](https://api.slack.com/methods/files.comments.add)
- [`slack.files.comments.delete({token, file, id})`](https://api.slack.com/methods/files.comments.delete)
- [`slack.files.comments.edit({token, comment, file, id})`](https://api.slack.com/methods/files.comments.edit)
- [`slack.files.delete({token, file})`](https://api.slack.com/methods/files.delete)
- [`slack.files.info({token, file})`](https://api.slack.com/methods/files.info)
- [`slack.files.list({token})`](https://api.slack.com/methods/files.list)
- [`slack.files.revokePublicURL({token, file})`](https://api.slack.com/methods/files.revokePublicURL)
- [`slack.files.sharedPublicURL({token, file})`](https://api.slack.com/methods/files.sharedPublicURL)
- [`slack.files.upload({token})`](https://api.slack.com/methods/files.upload)
- [`slack.groups.archive({token, channel})`](https://api.slack.com/methods/groups.archive)
- [`slack.groups.create({token, name})`](https://api.slack.com/methods/groups.create)
- [`slack.groups.createChild({token, channel})`](https://api.slack.com/methods/groups.createChild)
- [`slack.groups.history({token, channel})`](https://api.slack.com/methods/groups.history)
- [`slack.groups.info({token, channel})`](https://api.slack.com/methods/groups.info)
- [`slack.groups.invite({token, channel, user})`](https://api.slack.com/methods/groups.invite)
- [`slack.groups.kick({token, channel, user})`](https://api.slack.com/methods/groups.kick)
- [`slack.groups.leave({token, channel})`](https://api.slack.com/methods/groups.leave)
- [`slack.groups.list({token})`](https://api.slack.com/methods/groups.list)
- [`slack.groups.mark({token, channel, ts})`](https://api.slack.com/methods/groups.mark)
- [`slack.groups.open({token, channel})`](https://api.slack.com/methods/groups.open)
- [`slack.groups.rename({token, channel, name})`](https://api.slack.com/methods/groups.rename)
- [`slack.groups.replies({token, channel, thread_ts})`](https://api.slack.com/methods/groups.replies)
- [`slack.groups.setPurpose({token, channel, purpose})`](https://api.slack.com/methods/groups.setPurpose)
- [`slack.groups.setTopic({token, channel, topic})`](https://api.slack.com/methods/groups.setTopic)
- [`slack.groups.unarchive({token, channel})`](https://api.slack.com/methods/groups.unarchive)
- [`slack.im.close({token, channel})`](https://api.slack.com/methods/im.close)
- [`slack.im.history({token, channel})`](https://api.slack.com/methods/im.history)
- [`slack.im.list({token})`](https://api.slack.com/methods/im.list)
- [`slack.im.mark({token, channel, ts})`](https://api.slack.com/methods/im.mark)
- [`slack.im.open({token, user})`](https://api.slack.com/methods/im.open)
- [`slack.im.replies({token, channel, thread_ts})`](https://api.slack.com/methods/im.replies)
- [`slack.migration.exchange({token, users})`](https://api.slack.com/methods/migration.exchange)
- [`slack.mpim.close({token, channel})`](https://api.slack.com/methods/mpim.close)
- [`slack.mpim.history({token, channel})`](https://api.slack.com/methods/mpim.history)
- [`slack.mpim.list({token})`](https://api.slack.com/methods/mpim.list)
- [`slack.mpim.mark({token, channel, ts})`](https://api.slack.com/methods/mpim.mark)
- [`slack.mpim.open({token, users})`](https://api.slack.com/methods/mpim.open)
- [`slack.mpim.replies({token, channel, thread_ts})`](https://api.slack.com/methods/mpim.replies)
- [`slack.oauth.access({client_id, client_secret, code})`](https://api.slack.com/methods/oauth.access)
- [`slack.oauth.token({client_id, client_secret, code})`](https://api.slack.com/methods/oauth.token)
- [`slack.pins.add({token, channel})`](https://api.slack.com/methods/pins.add)
- [`slack.pins.list({token, channel})`](https://api.slack.com/methods/pins.list)
- [`slack.pins.remove({token, channel})`](https://api.slack.com/methods/pins.remove)
- [`slack.reactions.add({token, name})`](https://api.slack.com/methods/reactions.add)
- [`slack.reactions.get({token})`](https://api.slack.com/methods/reactions.get)
- [`slack.reactions.list({token})`](https://api.slack.com/methods/reactions.list)
- [`slack.reactions.remove({token, name})`](https://api.slack.com/methods/reactions.remove)
- [`slack.reminders.add({token, text, time})`](https://api.slack.com/methods/reminders.add)
- [`slack.reminders.complete({token, reminder})`](https://api.slack.com/methods/reminders.complete)
- [`slack.reminders.delete({token, reminder})`](https://api.slack.com/methods/reminders.delete)
- [`slack.reminders.info({token, reminder})`](https://api.slack.com/methods/reminders.info)
- [`slack.reminders.list({token})`](https://api.slack.com/methods/reminders.list)
- [`slack.rtm.connect({token})`](https://api.slack.com/methods/rtm.connect)
- [`slack.rtm.start({token})`](https://api.slack.com/methods/rtm.start)
- [`slack.search.all({token, query})`](https://api.slack.com/methods/search.all)
- [`slack.search.files({token, query})`](https://api.slack.com/methods/search.files)
- [`slack.search.messages({token, query})`](https://api.slack.com/methods/search.messages)
- [`slack.stars.add({token})`](https://api.slack.com/methods/stars.add)
- [`slack.stars.list({token})`](https://api.slack.com/methods/stars.list)
- [`slack.stars.remove({token})`](https://api.slack.com/methods/stars.remove)
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
- [`slack.usergroups.users.update({token, usergroup, users})`](https://api.slack.com/methods/usergroups.users.update)
- [`slack.users.conversations({token})`](https://api.slack.com/methods/users.conversations)
- [`slack.users.deletePhoto({token})`](https://api.slack.com/methods/users.deletePhoto)
- [`slack.users.getPresence({token, user})`](https://api.slack.com/methods/users.getPresence)
- [`slack.users.identity({token})`](https://api.slack.com/methods/users.identity)
- [`slack.users.info({token, user})`](https://api.slack.com/methods/users.info)
- [`slack.users.list({token})`](https://api.slack.com/methods/users.list)
- [`slack.users.lookupByEmail({token, email})`](https://api.slack.com/methods/users.lookupByEmail)
- [`slack.users.profile.get({token})`](https://api.slack.com/methods/users.profile.get)
- [`slack.users.profile.set({token})`](https://api.slack.com/methods/users.profile.set)
- [`slack.users.setActive({token})`](https://api.slack.com/methods/users.setActive)
- [`slack.users.setPhoto({token, image})`](https://api.slack.com/methods/users.setPhoto)
- [`slack.users.setPresence({token, presence})`](https://api.slack.com/methods/users.setPresence)

# Contributing

The code for the client is generated by scraping the [Slack Web API documentation](https://api.slack.com/methods).
Regenerate from the latest Slack documentation by running :runner::

```
npm run generate
```

Portions of this README are generated as well; to make edits, update `readme.tmpl`
and run the same command :cloud::umbrella::sunny::sunflower:.
