[![bitHound Code](https://www.bithound.io/github/smallwins/slack/badges/code.svg)](https://www.bithound.io/github/smallwins/slack) 
[![bitHound Dependencies](https://www.bithound.io/github/smallwins/slack/badges/dependencies.svg)](https://www.bithound.io/github/smallwins/slack/master/dependencies/npm) 
<a href="https://codeship.com/projects/121411"> <img style="max-width:130px" src="https://camo.githubusercontent.com/5064a30800f3ba03f5d50b0bfbf2369210501bc5/68747470733a2f2f636f6465736869702e636f6d2f70726f6a656374732f33666436343165302d383166342d303133332d633733332d3232393430613761343763362f7374617475733f6272616e63683d6d6173746572" alt="Codeship Status for smallwins/slack" data-canonical-src="https://codeship.com/projects/3fd641e0-81f4-0133-c733-22940a7a47c6/status?branch=master"></a>

<img width=333 src=https://s3-us-west-1.amazonaws.com/bugbot/slack-js.svg>

### A `slack` Web API client. :seedling::raised_hands::two_hearts:

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

Usage with es2015 works well too being that `slack` itself is writen using [Babel](http://babeljs.io/). Also nice, you can specify only the methods you need which can trim the payload if you using `slack` in a web browser.

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

(If the method signature below is *not* syntax highlighted then it needs parameter validation and tests. See the `channels.history` for a good example of how to do this if you want to contibute. Of course, all contributions are super ppreciated! There are many ways this library can be improved. 

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
- `oauth.access({client_id, client_secret, code}, (err, data)=>)`
- reactions.add
- reactions.get
- reactions.list
- reactions.remove
- `rtm.start({token}, (err, data)=>)`
- search.all
- search.files
- search.messages
- stars.list
- team.accessLogs
- `team.info(token, (err, data)=>)`
- team.info
- users.getPresence
- users.info
- `users.list(token, (err, data)=>)`
- users.setActive
- users.setPresence

