import test from 'tape'
import oauth from '../src/oauth.access'
import env from './_load-env'
// load SLACK_TOKEN for testing
env()

test('sanity', t=> {
  t.ok(oauth, 'oauth exists')
  t.end()
})

test('cannot get a token with a bad code', t=> {
  let client_id = process.env.SLACK_CLIENT_ID
  let client_secret = process.env.SLACK_CLIENT_SECRET
  oauth({client_id, client_secret, code:'bad_code'}, (err, data)=> {
    if (err.message === 'invalid_code') {
      t.ok(err, 'bad code is bad')
      console.log(err)
    }
    else {
      t.fail(data, 'bad code should not work')
      console.log(err, data)
    }
    t.end()
  })
})
