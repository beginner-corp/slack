import test from 'tape'
import oauth from '../src/oauth.access'
import env from 'node-env-file'
import path from 'path'

// load SLACK_CLIENT_ID and SLACK_CLIENT_SECRET for testing
env(path.join(process.cwd(), '.env'))

test('sanity', t=> {
  t.ok(oauth, 'oauth exists')
  t.end()
})

test('cannot get a token with a bad code', t=> {
  oauth('bad_code', (err, data)=> {
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
