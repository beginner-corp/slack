### slack api client proposal

- written in javascript 
- SUPER low level building block
- pure functions (no stateful things like classes, or using `new`)
- perfect symmetry (method sigs match api docs, method sigs are node style)
- opt in (use the parts of the api surface you want w/o the entire payload)
- works in node and the browser (related to above)
- future friendly [1/2] (writ in es2015 but published to npm as es5)
- future friendly [2/2] (no in-progress es* features, avoid polyfills and def no runtime)
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
import test from 'slack/api/api.test'

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
