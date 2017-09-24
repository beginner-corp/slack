var test = require('tape')
var Slack = require('..')

test('class ctor factory validates', t=> {
  t.plan(2)
  try {
    var bot = new Slack
  }
  catch(e) {
    t.ok(e, e) 
  }
  try {
    var bot = new Slack({})
  }
  catch(e) {
    t.ok(e, e) 
  }
})

