<p align="center">
  <img width="333px" src=https://s3-us-west-1.amazonaws.com/bugbot/slack-js.svg>
</p>

[![npm](https://badge.fury.io/js/slack.svg)](https://www.npmjs.com/package/slack) [![bitHound Code](https://www.bithound.io/github/smallwins/slack/badges/code.svg)](https://www.bithound.io/github/smallwins/slack) [![bitHound Dependencies](https://www.bithound.io/github/smallwins/slack/badges/dependencies.svg)](https://www.bithound.io/github/smallwins/slack/master/dependencies/npm) [![Codeship CI](https://img.shields.io/codeship/3fd641e0-81f4-0133-c733-22940a7a47c6.svg)](https://codeship.com/projects/121411) [![Apache 2.0](https://img.shields.io/badge/license-Apache 2.0-blue.svg)](https://github.com/smallwins/slack/blob/master/LICENSE)

### Slack [Web](https://api.slack.com/methods) and [RTM](https://api.slack.com/rtm) API client. :seedling::raised_hands::two_hearts:

- Written in ES2015 JS, published as ES5, tested for Node and the browser
- Web API is all pure functions *(no stateful things like classes or using `new`)*
- RTM API has a thin wrapper for `WebSocket` *(also tested for Node and the browser!)*
- Perfect symmetry *(low level: method signatures match API docs method signatures are node-style callbacks)*
- Opt in *(selectively use the parts of the api surface you want without the entire payload)*
- Well tested, CI, and Apache2 licensed

## Install :star2::package:

```
npm i slack
```

# Usage :sparkles::rocket:

`slack` is tested for Node and the browser.

```javascript
var slack = require('slack')

// logs {args:{hello:'world'}}
slack.api.test({hello:'world'}, console.log)
```

Usage with ES2015 works well too; `slack` itself is written with [Babel](http://babeljs.io/). You can also specify only the methods you need which can trim the payload if you are using `slack` in the browser.

```javascript
// only import the specific method you need
import test from 'slack/methods/api.test'

// logs {args:{hyper:'card'}}
test({hyper:'card'}, console.log)
```

Starting an RTM session:

```javascript
import slack from 'slack'

let bot = slack.rtm.client()
let token = process.env.SLACK_TOKEN

bot.hello(message=> {
  console.log(`Got a message: ${message}`)
  bot.close()
})

bot.listen({token})
```

The entire [RTM event API](https://api.slack.com/rtm) is supported.

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

- `slack.api.test({}, (err, data)=>)``
- `slack.auth.revoke({}, (err, data)=>)``
- `slack.auth.test({token}, (err, data)=>)``
- `slack.bots.info({token}, (err, data)=>)``
- `slack.channels.archive({token, channel}, (err, data)=>)``
- `slack.channels.create({token, name}, (err, data)=>)``
- `slack.channels.history({token, channel}, (err, data)=>)``
- `slack.channels.info({token, channel}, (err, data)=>)``
- `slack.channels.invite({token, channel, user}, (err, data)=>)``
- `slack.channels.join({token, name}, (err, data)=>)``
- `slack.channels.kick({token, channel, user}, (err, data)=>)``
- `slack.channels.leave({token, channel}, (err, data)=>)``
- `slack.channels.list({token}, (err, data)=>)``
- `slack.channels.mark({token, channel, ts}, (err, data)=>)``
- `slack.channels.rename({token, channel, name}, (err, data)=>)``
- `slack.channels.setPurpose({token, channel, purpose}, (err, data)=>)``
- `slack.channels.setTopic({token, channel, topic}, (err, data)=>)``
- `slack.channels.unarchive({token, channel}, (err, data)=>)``
- `slack.chat.delete({token, ts, channel}, (err, data)=>)``
- `slack.chat.meMessage({token, channel, text}, (err, data)=>)``
- `slack.chat.postMessage({token, channel, text}, (err, data)=>)``
- `slack.chat.update({token, ts, channel, text}, (err, data)=>)``
- `slack.dnd.endDnd({token}, (err, data)=>)``
- `slack.dnd.endSnooze({token}, (err, data)=>)``
- `slack.dnd.info({token}, (err, data)=>)``
- `slack.dnd.setSnooze({token, num_minutes}, (err, data)=>)``
- `slack.dnd.teamInfo({token}, (err, data)=>)``
- `slack.emoji.list({token}, (err, data)=>)``
- `slack.files.comments.add({token, file, comment}, (err, data)=>)``
- `slack.files.comments.delete({token, file, id}, (err, data)=>)``
- `slack.files.comments.edit({token, file, id, comment}, (err, data)=>)``
- `slack.files.delete({token, file}, (err, data)=>)``
- `slack.files.info({token, file}, (err, data)=>)``
- `slack.files.list({token}, (err, data)=>)``
- `slack.files.revokePublicURL({token, file}, (err, data)=>)``
- `slack.files.sharedPublicURL({token, file}, (err, data)=>)``
- `slack.files.upload({token, filename}, (err, data)=>)``
- `slack.groups.archive({token, channel}, (err, data)=>)``
- `slack.groups.close({token, channel}, (err, data)=>)``
- `slack.groups.create({token, name}, (err, data)=>)``
- `slack.groups.createChild({token, channel}, (err, data)=>)``
- `slack.groups.history({token, channel}, (err, data)=>)``
- `slack.groups.info({token, channel}, (err, data)=>)``
- `slack.groups.invite({token, channel, user}, (err, data)=>)``
- `slack.groups.kick({token, channel, user}, (err, data)=>)``
- `slack.groups.leave({token, channel}, (err, data)=>)``
- `slack.groups.list({token}, (err, data)=>)``
- `slack.groups.mark({token, channel, ts}, (err, data)=>)``
- `slack.groups.open({token, channel}, (err, data)=>)``
- `slack.groups.rename({token, channel, name}, (err, data)=>)``
- `slack.groups.setPurpose({token, channel, purpose}, (err, data)=>)``
- `slack.groups.setTopic({token, channel, topic}, (err, data)=>)``
- `slack.groups.unarchive({token, channel}, (err, data)=>)``
- `slack.im.close({token, channel}, (err, data)=>)``
- `slack.im.history({token, channel}, (err, data)=>)``
- `slack.im.list({token}, (err, data)=>)``
- `slack.im.mark({token, channel, ts}, (err, data)=>)``
- `slack.im.open({token, user}, (err, data)=>)``
- `slack.mpim.close({token, channel}, (err, data)=>)``
- `slack.mpim.history({token, channel}, (err, data)=>)``
- `slack.mpim.list({token}, (err, data)=>)``
- `slack.mpim.mark({token, channel, ts}, (err, data)=>)``
- `slack.mpim.open({token, users}, (err, data)=>)``
- `slack.oauth.access({client_id, client_secret, code}, (err, data)=>)``
- `slack.pins.add({token, channel}, (err, data)=>)``
- `slack.pins.list({token, channel}, (err, data)=>)``
- `slack.pins.remove({token, channel}, (err, data)=>)``
- `slack.reactions.add({token, name}, (err, data)=>)``
- `slack.reactions.get({token}, (err, data)=>)``
- `slack.reactions.list({token}, (err, data)=>)``
- `slack.reactions.remove({token, name}, (err, data)=>)``
- `slack.reminders.add({token, text, time}, (err, data)=>)``
- `slack.reminders.complete({token, reminder}, (err, data)=>)``
- `slack.reminders.delete({token, reminder}, (err, data)=>)``
- `slack.reminders.info({token, reminder}, (err, data)=>)``
- `slack.reminders.list({token}, (err, data)=>)``
- `slack.rtm.start({token}, (err, data)=>)``
- `slack.search.all({token, query}, (err, data)=>)``
- `slack.search.files({token, query}, (err, data)=>)``
- `slack.search.messages({token, query}, (err, data)=>)``
- `slack.stars.add({token}, (err, data)=>)``
- `slack.stars.list({token}, (err, data)=>)``
- `slack.stars.remove({token}, (err, data)=>)``
- `slack.team.accessLogs({token}, (err, data)=>)``
- `slack.team.billableInfo({token}, (err, data)=>)``
- `slack.team.info({token}, (err, data)=>)``
- `slack.team.integrationLogs({token}, (err, data)=>)``
- `slack.team.profile.get({token}, (err, data)=>)``
- `slack.usergroups.create({token, name}, (err, data)=>)``
- `slack.usergroups.disable({token, usergroup}, (err, data)=>)``
- `slack.usergroups.enable({token, usergroup}, (err, data)=>)``
- `slack.usergroups.list({token}, (err, data)=>)``
- `slack.usergroups.update({token, usergroup}, (err, data)=>)``
- `slack.usergroups.users.list({token, usergroup}, (err, data)=>)``
- `slack.usergroups.users.update({token, usergroup, users}, (err, data)=>)``
- `slack.users.getPresence({token, user}, (err, data)=>)``
- `slack.users.identity({token}, (err, data)=>)``
- `slack.users.info({token, user}, (err, data)=>)``
- `slack.users.list({token}, (err, data)=>)``
- `slack.users.profile.get({token}, (err, data)=>)``
- `slack.users.profile.set({token}, (err, data)=>)``
- `slack.users.setActive({token}, (err, data)=>)``
- `slack.users.setPresence({token, presence}, (err, data)=>)``

# Slack RTM API

`slack.rtm.client()` is a factory method that returns an thinly wrapped WebSocket instance with helpers for registering callbacks to [Slack RTM events](https://api.slack.com/events).

```javascript
var slack = require('slack')
var bot = slack.rtm.client()
var token = process.env.SLACK_TOKEN

// logs: ws, started, close, listen, etc... in addition to the RTM event handler methods
console.log(Object.keys(bot))

// do something with the rtm.start payload
bot.started(function(payload) {
  console.log('payload from rtm.start', payload)
})

// respond to a user_typing message
bot.user_typing(function(msg) {
  console.log('several people are coding', msg)
})

// start listening to the slack team associated to the token
bot.listen({token:token})
```

Try it out by running `npm start`:

<img src=https://s3-us-west-1.amazonaws.com/bugbot/repl-rtm.png>

#### RTM Client API

- `bot.ws` is a `WebSocket` instance constructed from `slack/methods/rtm.start` payload
- `bot.started(payload=>)` fires after `rtm.start` payload response is received and socket established
- `bot.close()` closes the `WebSocket`
- `bot.listen({token})` initiates the `slack/methods/rtm.start` handshake and delegates all messages

#### RTM Events

Each of these are methods on `bot` for registering handlers for the events of the same name.

- `accounts_changed`
- `bot_added`
- `bot_changed`
- `channel_archive`
- `channel_created`
- `channel_deleted`
- `channel_history_changed`
- `channel_joined`
- `channel_left`
- `channel_marked`
- `channel_rename`
- `channel_unarchive`
- `commands_changed`
- `dnd_updated`
- `dnd_updated_user`
- `email_domain_changed`
- `emoji_changed`
- `file_change`
- `file_comment_added`
- `file_comment_deleted`
- `file_comment_edited`
- `file_created`
- `file_deleted`
- `file_public`
- `file_shared`
- `file_unshared`
- `group_archive`
- `group_close`
- `group_history_changed`
- `group_joined`
- `group_left`
- `group_marked`
- `group_open`
- `group_rename`
- `group_unarchive`
- `hello`
- `im_close`
- `im_created`
- `im_history_changed`
- `im_marked`
- `im_open`
- `manual_presence_change`
- `message`
- `message.channels`
- `message.groups`
- `message.im`
- `message.mpim`
- `pin_added`
- `pin_removed`
- `pong`
- `pref_change`
- `presence_change`
- `reaction_added`
- `reaction_removed`
- `reconnect_url`
- `star_added`
- `star_removed`
- `subteam_created`
- `subteam_self_added`
- `subteam_self_removed`
- `subteam_updated`
- `team_domain_change`
- `team_join`
- `team_migration_started`
- `team_plan_change`
- `team_pref_change`
- `team_profile_change`
- `team_profile_delete`
- `team_profile_reorder`
- `team_rename`
- `url_verification`
- `user_change`
- `user_typing`


# Contributing

Most of the code for the client is generated by scraping the [Slack API documentation](https://api.slack.com/methods).
Regenerate from the latest Slack documentation by running :runner::

```
npm run generate
```

Portions of this README are generated as well; to make edits, update `readme.tmpl`
and run the same command :cloud::umbrella::sunny::sunflower:.
