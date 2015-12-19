import test from 'tape'
import start from '../src/rtm.start'
import env from './_env'
// load SLACK_TOKEN for testing
env()

test('can get rtm endpoint info', t=> {
  let token = process.env.SLACK_TOKEN
  start({token}, (err, data)=> {
    if (err) {
      t.fail(err, 'rtm.start fails')
      console.error(err)
    }
    else {
      t.ok(data, 'rtm.start started')
      console.log(data)
    }
    t.end()
  })  
})
