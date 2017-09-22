var test = require('tape')
var slack = require('..')
var env = require('./_env')

// load SLACK_TOKEN for testing
env()

// create a reference
let client = null

test('env', t=> {
  t.plan(2)
  t.ok(slack, 'slack client exists')
  client = new slack({token: process.env.SLACK_BOT_TOKEN})
  t.ok(client, 'got a Slack client')
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
