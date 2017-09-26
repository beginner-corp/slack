var test = require('tape')
var Slack = require('..')

test('class ctor factory validates', t=> {
  t.plan(2)
  try {
    var bot = new Slack
    t.ok(bot)
  }
  catch(e) {
    t.fail() 
  }
  try {
    var bot = new Slack({})
    t.ok(bot)
  }
  catch(e) {
    t.fail() 
  }
})

