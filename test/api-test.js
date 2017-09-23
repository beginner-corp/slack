var test = require('tape')
var exec = require('../src/_exec')

test('sanity', t=> {
  t.plan(1)
  t.ok(exec, 'exec exists')
})
