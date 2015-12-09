import test from 'tape'
import slack from '../src/api.test'

test('sanity', t=> {
  t.ok(slack, 'slack.api.test exists')
  t.end()
})

test('can call the api', t=> {
  slack({test:'hello world'}, (err, res)=> {
    if (err) {
      t.fail(err, err)
    }
    else {
      t.ok(res, 'gotta response')
      console.log(res)
    }
    t.end()
  })
})

test('can pass an error', t=> {
  slack({error:'wtfjs'}, (err, res)=> {
    if (err) {
      t.ok(err, 'got an error!')
      console.log(err)
    }
    else {
      t.fail(res, 'error did not bubble')
    }
    t.end()
  })
})
