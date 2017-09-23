<p align="center">
  <img width="333px" src=https://s3-us-west-1.amazonaws.com/bugbot/slack-js.svg>
</p>

[![npm](https://badge.fury.io/js/slack.svg)](https://www.npmjs.com/package/slack) [![Codeship CI](https://img.shields.io/codeship/3fd641e0-81f4-0133-c733-22940a7a47c6.svg)](https://codeship.com/projects/121411) 

### Slack [Web API](https://api.slack.com/methods) client :seedling::raised_hands::two_hearts:

- Written in modern JavaScript; tested for Node and the browser
- Complete support for the Slack Web API 
- Perfect symmetry: method signatures match API docs method 
- Choose your async adventure: method signatures accept either a node-style errbacks or return a `Promise`
- Opt into an oo style class instance that applies `token` to all methods
- Well tested, CI, and Apache2 licensed
- Only two dependencies: `util.promisify` and `tiny-json-http`
- Tiny: 7kb browserified/minified

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

Due to popular demand an OO style is now supported. For an instance of `Slack` all methods come prebound with the `token` parameter applied.

```javascript
const token = process.env.SLACKBOT_TOKEN
const Slack = require('slack')
const bot = new Slack({token})

// logs {args:{hyper:'card'}}
bot.api.test({hyper:'card'}).then(console.log)
```

Using `async`/`await` in Node 8.x:

```javascript
let token = process.env.SLACKBOT_TOKEN
let Slack = require('slack')
let bot = new Slack({token})

;(async function main() {
  // logs {args:{hyper:'card'}}
  var result = await bot.api.test({hyper:'card'})
  console.log(result)
})()
```

Choose whichever style works best for your project deployment needs and team preference. It is definately worth examining what style is more concise, expressive and determinatistic. It is also worth noticing how these properties can change between runtime versions. :hearts::beer:

### Test Setup :lock::key::point_left:

Clone this repo and create a file called `.env` in the root with the following:

```
SLACK_TOKEN=xxxx
SLACK_BOT_TOKEN=xxxx
SLACK_CLIENT_ID=xxxx
SLACK_CLIENT_SECRET=xxxx
```

You can get a `SLACK_TOKEN` for testing [here](https://api.slack.com/web). You need to register an app for a `SLACK_CLIENT_ID` and `SLACK_CLIENT_SECRET`. The tests require the app to have the `channels:history` scope.

## Testing :green_heart::green_heart::green_heart:

:point_right: In Node:

```
npm test
```

:point_right: Or the browser:

```
npm run btest
```

:point_right: Or kick up a REPL and poke around:

<img-src=https://s3-us-west-1.amazonaws.com/bugbot/slack-repl.png>

# Slack Web API :tada::honeybee::triangular_flag_on_post:

The entire Slack Web API is supported. All method signatures accept a `params` object and either a Node style callback (an errback) or, if absent, it will return a `Promise`. Required params are documented inline below.

- `slack.api.test({})`
- `slack.apps.permissions.info({token})`
- `slack.apps.permissions.request({token, scopes, trigger_id})`
- `slack.auth.revoke({token})`
- `slack.auth.test({token})`
- `slack.bots.info({token})`
- `slack.channels.archive({token, channel})`
- `slack.channels.create({token, name})`
- `slack.channels.history({token, channel})`
- `slack.channels.info({token, channel})`
- `slack.channels.invite({token, channel, user})`
- `slack.channels.join({token, name})`
- `slack.channels.kick({token, channel, user})`
- `slack.channels.leave({token, channel})`
- `slack.channels.list({token})`
- `slack.channels.mark({token, channel, ts})`
- `slack.channels.rename({token, channel, name})`
- `slack.channels.replies({token, channel, thread_ts})`
- `slack.channels.setPurpose({token, channel, purpose})`
- `slack.channels.setTopic({token, channel, topic})`
- `slack.channels.unarchive({token, channel})`
- `slack.chat.delete({token, channel, ts})`
- `slack.chat.meMessage({token, channel, text})`
- `slack.chat.postEphemeral({token, channel, text, user})`
- `slack.chat.postMessage({token, channel, text})`
- `slack.chat.unfurl({token, channel, ts, unfurls})`
- `slack.chat.update({token, channel, text, ts})`
- `slack.conversations.archive({token, channel})`
- `slack.conversations.close({token, channel})`
- `slack.conversations.create({token, name})`
- `slack.conversations.history({token, channel})`
- `slack.conversations.info({token, channel})`
- `slack.conversations.invite({token, channel, users})`
- `slack.conversations.join({token, channel})`
- `slack.conversations.kick({token, channel, user})`
- `slack.conversations.leave({token, channel})`
- `slack.conversations.list({token})`
- `slack.conversations.members({token, channel})`
- `slack.conversations.open({token})`
- `slack.conversations.rename({token, channel, name})`
- `slack.conversations.replies({token, channel, ts})`
- `slack.conversations.setPurpose({token, channel, purpose})`
- `slack.conversations.setTopic({token, channel, topic})`
- `slack.conversations.unarchive({token, channel})`
- `slack.dnd.endDnd({token})`
- `slack.dnd.endSnooze({token})`
- `slack.dnd.info({token})`
- `slack.dnd.setSnooze({token, num_minutes})`
- `slack.dnd.teamInfo({token})`
- `slack.emoji.list({token})`
- `slack.files.comments.add({token, comment, file})`
- `slack.files.comments.delete({token, file, id})`
- `slack.files.comments.edit({token, comment, file, id})`
- `slack.files.delete({token, file})`
- `slack.files.info({token, file})`
- `slack.files.list({token})`
- `slack.files.revokePublicURL({token, file})`
- `slack.files.sharedPublicURL({token, file})`
- `slack.files.upload({token})`
- `slack.groups.archive({token, channel})`
- `slack.groups.create({token, name})`
- `slack.groups.createChild({token, channel})`
- `slack.groups.history({token, channel})`
- `slack.groups.info({token, channel})`
- `slack.groups.invite({token, channel, user})`
- `slack.groups.kick({token, channel, user})`
- `slack.groups.leave({token, channel})`
- `slack.groups.list({token})`
- `slack.groups.mark({token, channel, ts})`
- `slack.groups.open({token, channel})`
- `slack.groups.rename({token, channel, name})`
- `slack.groups.replies({token, channel, thread_ts})`
- `slack.groups.setPurpose({token, channel, purpose})`
- `slack.groups.setTopic({token, channel, topic})`
- `slack.groups.unarchive({token, channel})`
- `slack.im.close({token, channel})`
- `slack.im.history({token, channel})`
- `slack.im.list({token})`
- `slack.im.mark({token, channel, ts})`
- `slack.im.open({token, user})`
- `slack.im.replies({token, channel, thread_ts})`
- `slack.mpim.close({token, channel})`
- `slack.mpim.history({token, channel})`
- `slack.mpim.list({token})`
- `slack.mpim.mark({token, channel, ts})`
- `slack.mpim.open({token, users})`
- `slack.mpim.replies({token, channel, thread_ts})`
- `slack.oauth.access({client_id, client_secret, code})`
- `slack.oauth.token({client_id, client_secret, code})`
- `slack.pins.add({token, channel})`
- `slack.pins.list({token, channel})`
- `slack.pins.remove({token, channel})`
- `slack.reactions.add({token, name})`
- `slack.reactions.get({token})`
- `slack.reactions.list({token})`
- `slack.reactions.remove({token, name})`
- `slack.reminders.add({token, text, time})`
- `slack.reminders.complete({token, reminder})`
- `slack.reminders.delete({token, reminder})`
- `slack.reminders.info({token, reminder})`
- `slack.reminders.list({token})`
- `slack.rtm.connect({token})`
- `slack.rtm.start({token})`
- `slack.search.all({token, query})`
- `slack.search.files({token, query})`
- `slack.search.messages({token, query})`
- `slack.stars.add({token})`
- `slack.stars.list({token})`
- `slack.stars.remove({token})`
- `slack.team.accessLogs({token})`
- `slack.team.billableInfo({token})`
- `slack.team.info({token})`
- `slack.team.integrationLogs({token})`
- `slack.team.profile.get({token})`
- `slack.usergroups.create({token, name})`
- `slack.usergroups.disable({token, usergroup})`
- `slack.usergroups.enable({token, usergroup})`
- `slack.usergroups.list({token})`
- `slack.usergroups.update({token, usergroup})`
- `slack.usergroups.users.list({token, usergroup})`
- `slack.usergroups.users.update({token, usergroup, users})`
- `slack.users.deletePhoto({token})`
- `slack.users.getPresence({token, user})`
- `slack.users.identity({token})`
- `slack.users.info({token, user})`
- `slack.users.list({token})`
- `slack.users.profile.get({token})`
- `slack.users.profile.set({token})`
- `slack.users.setActive({token})`
- `slack.users.setPhoto({token, image})`
- `slack.users.setPresence({token, presence})`

# Contributing

The code for the client is generated by scraping the [Slack API documentation](https://api.slack.com/methods).
Regenerate from the latest Slack documentation by running :runner::

```
npm run generate
```

Portions of this README are generated as well; to make edits, update `readme.tmpl`
and run the same command :cloud::umbrella::sunny::sunflower:.
