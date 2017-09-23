<p align="center">
  <img width="333px" src=https://s3-us-west-1.amazonaws.com/bugbot/slack-js.svg>
</p>

[![npm](https://badge.fury.io/js/slack.svg)](https://www.npmjs.com/package/slack) [![bitHound Dependencies](https://www.bithound.io/github/smallwins/slack/badges/dependencies.svg)](https://www.bithound.io/github/smallwins/slack/master/dependencies/npm) [![Codeship CI](https://img.shields.io/codeship/3fd641e0-81f4-0133-c733-22940a7a47c6.svg)](https://codeship.com/projects/121411) 

### Slack [Web](https://api.slack.com/methods) and [RTM](https://api.slack.com/rtm) API client. :seedling::raised_hands::two_hearts:

- Written in modern JavaScript; tested for Node and the browser
- Complete support for the Slack Web API 
- Perfect symmetry: method signatures match API docs method 
- Choose your async adventure: method signatures accept either a node-style errbacks or return a `Promise`
- Opt into an oo style class instance that applies `token` to all methods
- Well tested, CI, and Apache2 licensed

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

The entire Slack Web API is supported. All method signatures accept a `params` object and Node style callback. Required params are documented inline below.

- `slack.api.test({}, (err, data) => { })`
- `slack.apps.permissions.info({}, (err, data) => { })`
- `slack.apps.permissions.request({}, (err, data) => { })`
- `slack.auth.revoke({}, (err, data) => { })`
- `slack.auth.test({}, (err, data) => { })`
- `slack.bots.info({}, (err, data) => { })`
- `slack.channels.archive({}, (err, data) => { })`
- `slack.channels.create({}, (err, data) => { })`
- `slack.channels.history({}, (err, data) => { })`
- `slack.channels.info({}, (err, data) => { })`
- `slack.channels.invite({}, (err, data) => { })`
- `slack.channels.join({}, (err, data) => { })`
- `slack.channels.kick({}, (err, data) => { })`
- `slack.channels.leave({}, (err, data) => { })`
- `slack.channels.list({}, (err, data) => { })`
- `slack.channels.mark({}, (err, data) => { })`
- `slack.channels.rename({}, (err, data) => { })`
- `slack.channels.replies({}, (err, data) => { })`
- `slack.channels.setPurpose({}, (err, data) => { })`
- `slack.channels.setTopic({}, (err, data) => { })`
- `slack.channels.unarchive({}, (err, data) => { })`
- `slack.chat.delete({}, (err, data) => { })`
- `slack.chat.meMessage({}, (err, data) => { })`
- `slack.chat.postEphemeral({}, (err, data) => { })`
- `slack.chat.postMessage({}, (err, data) => { })`
- `slack.chat.unfurl({}, (err, data) => { })`
- `slack.chat.update({}, (err, data) => { })`
- `slack.conversations.archive({}, (err, data) => { })`
- `slack.conversations.close({}, (err, data) => { })`
- `slack.conversations.create({}, (err, data) => { })`
- `slack.conversations.history({}, (err, data) => { })`
- `slack.conversations.info({}, (err, data) => { })`
- `slack.conversations.invite({}, (err, data) => { })`
- `slack.conversations.join({}, (err, data) => { })`
- `slack.conversations.kick({}, (err, data) => { })`
- `slack.conversations.leave({}, (err, data) => { })`
- `slack.conversations.list({}, (err, data) => { })`
- `slack.conversations.members({}, (err, data) => { })`
- `slack.conversations.open({}, (err, data) => { })`
- `slack.conversations.rename({}, (err, data) => { })`
- `slack.conversations.replies({}, (err, data) => { })`
- `slack.conversations.setPurpose({}, (err, data) => { })`
- `slack.conversations.setTopic({}, (err, data) => { })`
- `slack.conversations.unarchive({}, (err, data) => { })`
- `slack.dnd.endDnd({}, (err, data) => { })`
- `slack.dnd.endSnooze({}, (err, data) => { })`
- `slack.dnd.info({}, (err, data) => { })`
- `slack.dnd.setSnooze({}, (err, data) => { })`
- `slack.dnd.teamInfo({}, (err, data) => { })`
- `slack.emoji.list({}, (err, data) => { })`
- `slack.files.comments.add({}, (err, data) => { })`
- `slack.files.comments.delete({}, (err, data) => { })`
- `slack.files.comments.edit({}, (err, data) => { })`
- `slack.files.delete({}, (err, data) => { })`
- `slack.files.info({}, (err, data) => { })`
- `slack.files.list({}, (err, data) => { })`
- `slack.files.revokePublicURL({}, (err, data) => { })`
- `slack.files.sharedPublicURL({}, (err, data) => { })`
- `slack.files.upload({}, (err, data) => { })`
- `slack.groups.archive({}, (err, data) => { })`
- `slack.groups.create({}, (err, data) => { })`
- `slack.groups.createChild({}, (err, data) => { })`
- `slack.groups.history({}, (err, data) => { })`
- `slack.groups.info({}, (err, data) => { })`
- `slack.groups.invite({}, (err, data) => { })`
- `slack.groups.kick({}, (err, data) => { })`
- `slack.groups.leave({}, (err, data) => { })`
- `slack.groups.list({}, (err, data) => { })`
- `slack.groups.mark({}, (err, data) => { })`
- `slack.groups.open({}, (err, data) => { })`
- `slack.groups.rename({}, (err, data) => { })`
- `slack.groups.replies({}, (err, data) => { })`
- `slack.groups.setPurpose({}, (err, data) => { })`
- `slack.groups.setTopic({}, (err, data) => { })`
- `slack.groups.unarchive({}, (err, data) => { })`
- `slack.im.close({}, (err, data) => { })`
- `slack.im.history({}, (err, data) => { })`
- `slack.im.list({}, (err, data) => { })`
- `slack.im.mark({}, (err, data) => { })`
- `slack.im.open({}, (err, data) => { })`
- `slack.im.replies({}, (err, data) => { })`
- `slack.mpim.close({}, (err, data) => { })`
- `slack.mpim.history({}, (err, data) => { })`
- `slack.mpim.list({}, (err, data) => { })`
- `slack.mpim.mark({}, (err, data) => { })`
- `slack.mpim.open({}, (err, data) => { })`
- `slack.mpim.replies({}, (err, data) => { })`
- `slack.oauth.access({}, (err, data) => { })`
- `slack.oauth.token({}, (err, data) => { })`
- `slack.pins.add({}, (err, data) => { })`
- `slack.pins.list({}, (err, data) => { })`
- `slack.pins.remove({}, (err, data) => { })`
- `slack.reactions.add({}, (err, data) => { })`
- `slack.reactions.get({}, (err, data) => { })`
- `slack.reactions.list({}, (err, data) => { })`
- `slack.reactions.remove({}, (err, data) => { })`
- `slack.reminders.add({}, (err, data) => { })`
- `slack.reminders.complete({}, (err, data) => { })`
- `slack.reminders.delete({}, (err, data) => { })`
- `slack.reminders.info({}, (err, data) => { })`
- `slack.reminders.list({}, (err, data) => { })`
- `slack.rtm.connect({}, (err, data) => { })`
- `slack.rtm.start({}, (err, data) => { })`
- `slack.search.all({}, (err, data) => { })`
- `slack.search.files({}, (err, data) => { })`
- `slack.search.messages({}, (err, data) => { })`
- `slack.stars.add({}, (err, data) => { })`
- `slack.stars.list({}, (err, data) => { })`
- `slack.stars.remove({}, (err, data) => { })`
- `slack.team.accessLogs({}, (err, data) => { })`
- `slack.team.billableInfo({}, (err, data) => { })`
- `slack.team.info({}, (err, data) => { })`
- `slack.team.integrationLogs({}, (err, data) => { })`
- `slack.team.profile.get({}, (err, data) => { })`
- `slack.usergroups.create({}, (err, data) => { })`
- `slack.usergroups.disable({}, (err, data) => { })`
- `slack.usergroups.enable({}, (err, data) => { })`
- `slack.usergroups.list({}, (err, data) => { })`
- `slack.usergroups.update({}, (err, data) => { })`
- `slack.usergroups.users.list({}, (err, data) => { })`
- `slack.usergroups.users.update({}, (err, data) => { })`
- `slack.users.deletePhoto({}, (err, data) => { })`
- `slack.users.getPresence({}, (err, data) => { })`
- `slack.users.identity({}, (err, data) => { })`
- `slack.users.info({}, (err, data) => { })`
- `slack.users.list({}, (err, data) => { })`
- `slack.users.profile.get({}, (err, data) => { })`
- `slack.users.profile.set({}, (err, data) => { })`
- `slack.users.setActive({}, (err, data) => { })`
- `slack.users.setPhoto({}, (err, data) => { })`
- `slack.users.setPresence({}, (err, data) => { })`

# Contributing

The code for the client is generated by scraping the [Slack API documentation](https://api.slack.com/methods).
Regenerate from the latest Slack documentation by running :runner::

```
npm run generate
```

Portions of this README are generated as well; to make edits, update `readme.tmpl`
and run the same command :cloud::umbrella::sunny::sunflower:.
