[![npm](https://badge.fury.io/js/slack.svg)](https://www.npmjs.com/package/slack) [![bitHound Code](https://www.bithound.io/github/smallwins/slack/badges/code.svg)](https://www.bithound.io/github/smallwins/slack) [![bitHound Dependencies](https://www.bithound.io/github/smallwins/slack/badges/dependencies.svg)](https://www.bithound.io/github/smallwins/slack/master/dependencies/npm) [![Codeship CI](https://img.shields.io/codeship/3fd641e0-81f4-0133-c733-22940a7a47c6.svg)](https://codeship.com/projects/121411) [![Apache 2.0](https://img.shields.io/badge/license-Apache 2.0-blue.svg)](https://github.com/smallwins/slack/blob/master/LICENSE)

<img width=333 src=https://s3-us-west-1.amazonaws.com/bugbot/slack-js.svg>

### Slack [Web](https://api.slack.com/methods) and [RTM](https://api.slack.com/rtm) API client. :seedling::raised_hands::two_hearts:

- Writ in es2015 JS, published as es5, tested for Node and the browser
- Web API is all pure functions *(no stateful things like classes or using `new`)*
- RTM API has a thin wrapper for `WebSocket` *(also tested for Node and the browser!)*
- Perfect symmetry *(low level: method sigs match api docs method sigs are node style)*
- Opt in *(selectivly use the parts of the api surface you want w/o the entire payload)*
- Well tested, CI and Apache2 licensed

## install :star2::package:

```
npm i slack
```

# usage :sparkles::rocket:

`slack` is tested for Node and the browser.

```javascript
var slack = require('slack')

// logs {args:{hello:'world'}}
slack.api.test({hello:'world'}, console.log)
```

Usage with es2015 works well too; `slack` itself is written with [Babel](http://babeljs.io/). Also nice, you can specify only the methods you need which can trim the payload if you are using `slack` in the browser.

```javascript
// only import the one method (and its deps oc)
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

### test setup :lock::key::point_left:

Clone this repo and create a file called `.env` in the root with the following:

```
SLACK_TOKEN=xxxx
SLACK_CLIENT_ID=xxxx
SLACK_CLIENT_SECRET=xxxx
```

You can get a `SLACK_TOKEN` for testing [here](https://api.slack.com/web). You need to register an app for a `SLACK_CLIENT_ID` and `SLACK_CLIENT_SECRET`.

## testing :green_heart::green_heart::green_heart:

:point_right: In Node:

```
npm test
```

:point_right: Or the browser:

```
npm run btest
```

:point_right: Or kick up a repl and poke around:

<img-src=https://s3-us-west-1.amazonaws.com/bugbot/slack-repl.png>

# slack web api :tada::honeybee::triangular_flag_on_post:

The entire Slack Web API is supported. All method signatures accept a `params` object and Node style callback. Required params are documented inline below.

- `slack.api.test({}, (err, data)=>)`
- `slack.auth.test({token}, (err, data)=>)`
- `slack.channels.archive({token, channel}, (err, data)=>)`
- `slack.channels.create({token, name}, (err, data)=>)`
- `slack.channels.history({token, channel}, (err, data)=>)`
- `slack.channels.info({token, channel}, (err, data)=>)`
- `slack.channels.invite({token, channel, user}, (err, data)=>)`
- `slack.channels.join({token, name}, (err, data)=>)`
- `slack.channels.kick({token, channel, user}, (err, data)=>)`
- `slack.channels.leave({token, channel}, (err, data)=>)`
- `slack.channels.list({token}, (err, data)=>)`
- `slack.channels.mark({token, channel, ts}, (err, data)=>)`
- `slack.channels.rename({token, channel, name}, (err, data)=>)`
- `slack.channels.setPurpose({token, channel, purpose}, (err, data)=>)`
- `slack.channels.setTopic({token, channel, topic}, (err, data)=>)`
- `slack.channels.unarchive({token, channel}, (err, data)=>)`
- `slack.chat.delete({token, ts, channel}, (err, data)=>)`
- `slack.chat.postMessage({token, channel, text}, (err, data)=>)`
- `slack.chat.update({token, ts, channel, text}, (err, data)=>)`
- `slack.dnd.endDnd({token}, (err, data)=>)`
- `slack.dnd.endSnooze({token}, (err, data)=>)`
- `slack.dnd.info({token}, (err, data)=>)`
- `slack.dnd.setSnooze({token, num_minutes}, (err, data)=>)`
- `slack.dnd.teamInfo({token}, (err, data)=>)`
- `slack.emoji.list({token}, (err, data)=>)`
- `slack.files.delete({token, file}, (err, data)=>)`
- `slack.files.info({token, file}, (err, data)=>)`
- `slack.files.list({token}, (err, data)=>)`
- `slack.files.upload({token, file, filename}, (err, data)=>)`
- `slack.groups.archive({token, channel}, (err, data)=>)`
- `slack.groups.close({token, channel}, (err, data)=>)`
- `slack.groups.create({token, name}, (err, data)=>)`
- `slack.groups.createChild({token, channel}, (err, data)=>)`
- `slack.groups.history({token, channel}, (err, data)=>)`
- `slack.groups.info({token, channel}, (err, data)=>)`
- `slack.groups.invite({token, channel, user}, (err, data)=>)`
- `slack.groups.kick({token, channel, user}, (err, data)=>)`
- `slack.groups.leave({token, channel}, (err, data)=>)`
- `slack.groups.list({token}, (err, data)=>)`
- `slack.groups.mark({token, channel, ts}, (err, data)=>)`
- `slack.groups.open({token, channel}, (err, data)=>)`
- `slack.groups.rename({token, channel, name}, (err, data)=>)`
- `slack.groups.setPurpose({token, channel, purpose}, (err, data)=>)`
- `slack.groups.setTopic({token, channel, topic}, (err, data)=>)`
- `slack.groups.unarchive({token, channel}, (err, data)=>)`
- `slack.im.close({token, channel}, (err, data)=>)`
- `slack.im.history({token, channel}, (err, data)=>)`
- `slack.im.list({token}, (err, data)=>)`
- `slack.im.mark({token, channel, ts}, (err, data)=>)`
- `slack.im.open({token, user}, (err, data)=>)`
- `slack.mpim.close({token, channel}, (err, data)=>)`
- `slack.mpim.history({token, channel}, (err, data)=>)`
- `slack.mpim.list({token}, (err, data)=>)`
- `slack.mpim.mark({token, channel, ts}, (err, data)=>)`
- `slack.mpim.open({token, users}, (err, data)=>)`
- `slack.oauth.access({client_id, client_secret, code}, (err, data)=>)`
- `slack.pins.add({token, channel}, (err, data)=>)`
- `slack.pins.list({token, channel}, (err, data)=>)`
- `slack.pins.remove({token, channel}, (err, data)=>)`
- `slack.reactions.add({token, name}, (err, data)=>)`
- `slack.reactions.get({token}, (err, data)=>)`
- `slack.reactions.list({token}, (err, data)=>)`
- `slack.reactions.remove({token, name}, (err, data)=>)`
- `slack.rtm.start({token}, (err, data)=>)`
- `slack.search.all({token, query}, (err, data)=>)`
- `slack.search.files({token, query}, (err, data)=>)`
- `slack.search.messages({token, query}, (err, data)=>)`
- `slack.stars.add({token}, (err, data)=>)`
- `slack.stars.list({token}, (err, data)=>)`
- `slack.stars.remove({token}, (err, data)=>)`
- `slack.team.accessLogs({token}, (err, data)=>)`
- `slack.team.info({token}, (err, data)=>)`
- `slack.team.integrationLogs({token}, (err, data)=>)`
- `slack.usergroups.create({token, name}, (err, data)=>)`
- `slack.usergroups.disable({token, usergroup}, (err, data)=>)`
- `slack.usergroups.enable({token, usergroup}, (err, data)=>)`
- `slack.usergroups.list({token}, (err, data)=>)`
- `slack.usergroups.update({token, usergroup}, (err, data)=>)`
- `slack.usergroups.users.list({token, usergroup}, (err, data)=>)`
- `slack.usergroups.users.update({token, usergroup, users}, (err, data)=>)`
- `slack.users.getPresence({token, user}, (err, data)=>)`
- `slack.users.info({token, user}, (err, data)=>)`
- `slack.users.list({token}, (err, data)=>)`
- `slack.users.setActive({token}, (err, data)=>)`
- `slack.users.setPresence({token, presence}, (err, data)=>)`

# slack rtm api 

`slack.rtm.client()` is a factory method that returns an thinly wrapped WebSocket instance with helpers for registering callbacks to [Slack RTM events](https://api.slack.com/events).

```javascript
var slack = require('slack')
var bot = slack.rtm.client()
var token = process.env.SLACK_TOKEN

// logs: ws, started, close, listen ... in addition to RTM event handler reg methods
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

#### rtm client api

- `bot.ws` is a `WebSocket` instance constructed from `slack/methods/rtm.start` payload
- `bot.started(payload=>)` fires after `rtm.start` payload response is recieved and socket established
- `bot.close()` closes the `WebSocket`
- `bot.listen({token})` initiates the `slack/methods/rtm.start` handshake and delegates all messages

#### rtm events

Each of these are methods on `bot` for registering handlers for the events of the same name. 

- `hello`
- `message`
- `user_typing`
- `channel_marked`
- `channel_created`
- `channel_joined`
- `channel_left`
- `channel_deleted`
- `channel_rename`
- `channel_archive`
- `channel_unarchive`
- `channel_history_changed`
- `im_created`
- `im_open`
- `im_close`
- `im_marked`
- `im_history_changed`
- `group_joined`
- `group_left`
- `group_open`
- `group_close`
- `group_archive`
- `group_unarchive`
- `group_rename`
- `group_marked`
- `group_history_changed`
- `file_created`
- `file_shared`
- `file_unshared`
- `file_public`
- `file_private`
- `file_change`
- `file_deleted`
- `file_comment_added`
- `file_comment_edited`
- `file_comment_deleted`
- `pin_added`
- `pin_removed`
- `presence_change`
- `manual_presence_change`
- `pref_change`
- `user_change`
- `team_join`
- `star_added`
- `star_removed`
- `reaction_added`
- `reaction_removed`
- `emoji_changed`
- `commands_changed`
- `team_plan_change`
- `team_pref_change`
- `team_rename`
- `team_domain_change`
- `email_domain_changed`
- `bot_added`
- `bot_changed`
- `accounts_changed`
- `team_migration_started`
- `subteam_created`
- `subteam_updated`
- `subteam_self_added`
- `subteam_self_removed` 

