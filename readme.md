[![npm package]](https://badge.fury.io/js/slack.svg)](https://www.npmjs.com/package/slack) [![bitHound Code](https://www.bithound.io/github/smallwins/slack/badges/code.svg)](https://www.bithound.io/github/smallwins/slack) [![bitHound Dependencies](https://www.bithound.io/github/smallwins/slack/badges/dependencies.svg)](https://www.bithound.io/github/smallwins/slack/master/dependencies/npm) [![Codeship CI](https://img.shields.io/codeship/3fd641e0-81f4-0133-c733-22940a7a47c6.svg)](https://codeship.com/projects/121411)

<img width=333 src=https://s3-us-west-1.amazonaws.com/bugbot/slack-js.svg>

### A [Slack Web API](https://api.slack.com/methods) client. :seedling::raised_hands::two_hearts:

- Writ in es2015 JavaScript
- Pure functions *(no stateful things like classes, or using `new`)*
- Perfect symmetry *(method sigs match api docs, method sigs are node style)*
- Opt in *(selectivly use the parts of the api surface you want w/o the entire payload)*
- Works in Node and the browser *(per above)*
- `Future friendly 1/2` published to npm as es5
- `Future friendly 2/2` no in-progress es* features, avoid polyfills and runtime
- Heavily tested, CI and Apache2 licensed

## install :star2::package:

    npm i slack

# usage :sparkles::rocket:

This module works in es5 environments by default. It is tested for Node and the browser.

```javascript
var slack = require('slack')

// logs {args:{hello:'world'}}
slack.api.test({hello:'word'}, console.log)
```

Usage with es2015 works well too being that `slack` itself is writen using [Babel](http://babeljs.io/). Also nice, you can specify only the methods you need which can trim the payload if you are using `slack` in the browser.

```javascript
// only import the one method
import test from 'slack/methods/api.test'

// logs {args:{hyper:'card'}}
test({hyper:'card'}, console.log)
```

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

<img src=https://s3-us-west-1.amazonaws.com/bugbot/slack-repl.png>

# currently implemented api :tada:

If the method signature below is *not* syntax highlighted then it needs parameter validation and tests. See the `channels.history` for a good example of how to do this if you want to contibute. Of course, all contributions are super appreciated! There are many ways this library can be improved. :honeybee::triangular_flag_on_post:

- `api.test(params, (err, data)=>)`
- `auth.test(token, (err, data)=>)`
- channels.archive
- channels.create
- `channels.history({token, channel}, (err, data)=>)`
- channels.info
- channels.invite
- channels.join
- channels.kick
- channels.leave
- `channels.list({token, exclude_archived}, (err, data)=>)`
- channels.mark
- channels.rename
- channels.setPurpose
- channels.setTopic
- channels.unarchive
- chat.delete
- `chat.postMessage({token, text, channel}, (err, data)=>)`
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
- `mpim.close({token, channel}, (err, data)=>)`
- `mpim.history({token, channel}, (err, data)=>)`
- `mpim.list({token}, (err, data)=>)`
- `mpim.mark({token, channel, ts}, (err, data)=>)`
- `mpim.open({token, users}, (err, data)=>)`
- `oauth.access({client_id, client_secret, code}, (err, data)=>)`
- `pins.add({token, channel}, (err, data)=>)`
- `pins.list({token, channel}, (err, data)=>)`
- `pins.remove({token, channel}, (err, data)=>)`
- reactions.add
- reactions.get
- reactions.list
- reactions.remove
- `rtm.start({token}, (err, data)=>)`
- search.all
- search.files
- search.messages
- `stars.add({token}, (err, data)=>)`
- `stars.list({token}, (err, data)=>)`
- `stars.remove({token}, (err, data)=>)`
- team.accessLogs
- `team.info(token, (err, data)=>)`
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
- `users.list(token, (err, data)=>)`
- users.setActive
- users.setPresence

