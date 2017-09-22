var test = require('tape')
var list = require('..').users.list
var env = require('./_env')

// load SLACK_BOT_TOKEN for testing
env()

test('can list users', t=> {
  let token = process.env.SLACK_BOT_TOKEN
  list({token}, (err, data)=> {
    if (err) {
      t.fail(err, 'users.list fails')
      console.error(err)
    }
    else {
      t.ok(data, 'listed users')
      console.log(data)
    }
    t.end()
  })
})
