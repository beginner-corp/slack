import test from 'tape'
import exec from '../src/_exec'

test('sanity', t=> {
  t.ok(exec, 'exec exists')
  t.end()
})
