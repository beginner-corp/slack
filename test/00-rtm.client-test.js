import slack from '../'
import test from 'tape'
import env from './_env'

// load SLACK_TOKEN for testing
env()

let bot;

test('bot starts', t=> {
  t.plan(2)
  let token = process.env.SLACK_TOKEN
  bot = slack.rtm.client()

  // define a hello handler
  bot.hello(msg=> {
    t.ok(msg, 'got a hello message')
    console.log(msg)
  })

  bot.listen({token}, (err, d)=> {
    t.ok(d, 'got the data')
    console.log('got data')
  })
})

test('bot stops', t=> {
  t.plan(1)
  bot.close()
  t.ok(true, 'bot is closed')
})

test('bot bubbles error thru optional callback', t=> {
  t.plan(1)
  let token = 'mmmmm-baaaad-token'
  bot = slack.rtm.client()

  bot.listen({token}, (err, d)=> {
    t.ok(err, 'got the error')
    console.log(err)
  })
})
 

