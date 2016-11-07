import test from 'tape'
import slack from '../'
import env from './_env'

// load SLACK_TOKEN for testing
env()

// create a reference
let client = null

test('env', t=> {
  t.plan(2)
  t.ok(slack.api.client, 'slack.api.client exists')
  client = slack.api.client(process.env.SLACK_BOT_TOKEN)
  t.ok(client, 'got a client')
  console.log(client)
})

test('can call client', t=> {
  t.plan(1)
  client.users.list({}, function __list(err, result) {
    if (err) {
      t.fail(err)
    }
    else {
      t.ok(result)
      console.log(result)
    }
  })
})
