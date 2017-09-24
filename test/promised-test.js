var test = require('tape')
var Slack = require('..')
var env = require('./_env')

// load SLACK_BOT_TOKEN for testing
env()

test('promise', t=> {
  t.plan(1)
  let token = process.env.SLACK_BOT_TOKEN
  let bot = new Slack({token})
  bot.api.test({a:1}).then(function(data) {
    t.ok(data, 'promised called')
    console.log(data)
  }).catch(function(err) {
    t.fail(err, 'promised fails')
    console.error(err)
  })
})

