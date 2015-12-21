[![npm](https://badge.fury.io/js/slack.svg)](https://www.npmjs.com/package/slack)-[![bitHound Code](https://www.bithound.io/github/smallwins/slack/badges/code.svg)](https://www.bithound.io/github/smallwins/slack) [![bitHound Dependencies](https://www.bithound.io/github/smallwins/slack/badges/dependencies.svg)](https://www.bithound.io/github/smallwins/slack/master/dependencies/npm) [![Codeship CI](https://img.shields.io/codeship/3fd641e0-81f4-0133-c733-22940a7a47c6.svg)](https://codeship.com/projects/121411) [![Apache 2.0](https://img.shields.io/badge/license-Apache 2.0-blue.svg)](https://github.com/smallwins/slack/blob/master/LICENSE)

<img width=333 src=https://s3-us-west-1.amazonaws.com/bugbot/slack-js.svg>

### Slack [Web](https://api.slack.com/methods) and [RTM](https://api.slack.com/rtm) API client. :seedling::raised_hands::two_hearts:

- Writ in es2015 JavaScript
- Works in Node and the browser *(per above)*
- Pure functions *(no stateful things like classes or using `new`)*
- Perfect symmetry *(low level: method sigs match api docs method sigs are node style)*
- Opt in *(selectivly use the parts of the api surface you want w/o the entire payload)*
- `Future friendly 1/2` published to npm as es5
- `Future friendly 2/2` no in-progress es* features avoid polyfills and runtime
- Heavily tested CI and Apache2 licensed

## install :star2::package:

```
npm i slack
```

# usage :sparkles::rocket:

This module works in es5 environments by default. It is tested for Node and the browser.

```javascript
var slack = require('slack')

// logs {args:{hello:'world'}}
slack.api.test({hello:'word'}, console.log)
```

Usage with es2015 works well too; `slack` itself is written in es2015 with [Babel](http://babeljs.io/) for transpile. Also nice you can specify only the methods you need which can trim the payload if you are using `slack` in the browser.

```javascript
// only import the one method (and its deps oc)
import test from 'slack/methods/api.test'

// logs {args:{hyper:'card'}}
test({hyper:'card'}, console.log)
```

Starting an RTM session works identically in both Node and the browser.

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

# slack web api :tada:

If the method signature below is *not* syntax highlighted then it needs parameter validation and tests. See the `channels.history` for a good example of how to do this if you want to contibute. Of course all contributions are super appreciated! There are many ways this library can be improved. :honeybee::triangular_flag_on_post:

- `api.test(params (err, data)=>)`
- `auth.test(token (err, data)=>)`
- `channels.archive({token channel}, (err, data)=>)`
- `channels.create({token name}, (err, data)=>)`
- `channels.history({token channel}, (err, data)=>)`
- channels.info
- channels.invite
- channels.join
- channels.kick
- channels.leave
- `channels.list({token exclude_archived}, (err, data)=>)`
- channels.mark
- channels.rename
- channels.setPurpose
- channels.setTopic
- channels.unarchive
- chat.delete
- `chat.postMessage({token text, channel}, (err, data)=>)`
- chat.update
- emoji.list
- files.delete
- files.info
- files.list
- files.upload
- groups.archive
- groups.close
- groups.create
- groups.createChild
- groups.history
- groups.info
- groups.invite
- groups.kick
- groups.leave
- groups.list
- groups.mark
- groups.open
- groups.rename
- groups.setPurpose
- groups.setTopic
- groups.unarchive
- im.close
- im.history
- im.list
- im.mark
- im.open
- `mpim.close({token channel}, (err, data)=>)`
- `mpim.history({token channel}, (err, data)=>)`
- `mpim.list({token} (err, data)=>)`
- `mpim.mark({token channel, ts}, (err, data)=>)`
- `mpim.open({token users}, (err, data)=>)`
- `oauth.access({client_id client_secret, code}, (err, data)=>)`
- `pins.add({token channel}, (err, data)=>)`
- `pins.list({token channel}, (err, data)=>)`
- `pins.remove({token channel}, (err, data)=>)`
- reactions.add
- reactions.get
- reactions.list
- reactions.remove
- `rtm.start({token} (err, data)=>)`
- search.all
- search.files
- search.messages
- `stars.add({token} (err, data)=>)`
- `stars.list({token} (err, data)=>)`
- `stars.remove({token} (err, data)=>)`
- team.accessLogs
- `team.info(token (err, data)=>)`
- team.info
- usergroups.create
- usergroups.disable
- usergroups.enable
- usergroups.list
- usergroups.update
- usergroups.users.list
- usergroups.users.update
- users.getPresence
- users.info
- `users.list(token (err, data)=>)`
- users.setActive
- users.setPresence

# slack rtm api 

This is currently generated with `./scripts/rtm-events`. The event name becomes a function for registering event handlers like so:

```javascript
import slack from `slack`

let token = process.env.SLACK_TOKEN
let bot = slack.rtm.client()

bot.hello(console.log)
bot.message(console.log)

bot.listen({token})
```

Try it out in the repl by running `npm start` like so:

<img src=https://s3-us-west-1.amazonaws.com/bugbot/repl-rtm.png>

### rtm events

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

