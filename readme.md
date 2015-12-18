### slack api client proposal [![bitHound Code](https://www.bithound.io/github/smallwins/slack/badges/code.svg)](https://www.bithound.io/github/smallwins/slack) [![bitHound Dependencies](https://www.bithound.io/github/smallwins/slack/badges/dependencies.svg)](https://www.bithound.io/github/smallwins/slack/master/dependencies/npm) [ ![Codeship Status for smallwins/slack](https://codeship.com/projects/3fd641e0-81f4-0133-c733-22940a7a47c6/status?branch=master)](https://codeship.com/projects/121411)

- written in javascript 
- SUPER low level building block
- pure functions (no stateful things like classes, or using `new`)
- perfect symmetry (method sigs match api docs, method sigs are node style)
- opt in (use the parts of the api surface you want w/o the entire payload)
- works in node and the browser (related to above)
- future friendly 1/2 (writ in es2015 but published to npm as es5)
- future friendly 2/2 (no in-progress es* features, avoid polyfills and def no runtime)
- start w/ just the web api (for now)
- heavily tested, ci, apache2 license/contrib model

## example usage

```javascript
import slack from 'slack'

// logs {args:{hello:'world'}}
slack.api.test({hello:'word'}, console.log)
```

You can just use one method, if you are exporting for the browser, for example.

```javascript
import test from 'slack/methods/api.test'

// logs {args:{hyper:'card'}}
test({hyper:'card'}, console.log)
```

### run the tests

you'll need a `.env` file in the root of this repo with the following:

```
SLACK_TOKEN=xxxx
SLACK_CLIENT_ID=xxxx
SLACK_CLIENT_SECRET=xxxx
```

You can get a `SLACK_TOKEN` for testing here: https://api.slack.com/web

# currently implemented api

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

