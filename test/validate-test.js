var test = require('tape')
var slack = require('..')

test('can get team info', t=> {
  t.plan(1)
  slack.auth.test({}).then(function(data) {
    t.fail(data, 'got data')
    console.log(data)
  }).catch(function(err) {
    t.ok(err, 'failed correctly')
    console.log(err)
  })
})

