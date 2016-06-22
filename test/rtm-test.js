import slack from '../'
import test from 'tape'
import env from './_env'

// load SLACK_BOT_TOKEN for testing
env()

test('can get rtm endpoint info', t=> {
  let token = process.env.SLACK_BOT_TOKEN
  slack.rtm.start({token}, (err, data)=> {
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

let bot;

test('bot starts', t=> {
  let token = process.env.SLACK_BOT_TOKEN
  bot = slack.rtm.client()

  // define a hello handler
  bot.hello(msg=> {
    t.ok(msg, 'got a hello message')
    console.log(msg)
    t.end()
  })

  bot.listen({token})
})

test('bot stops', t=> {
  t.plan(1)
  bot.close()
  t.ok(true, 'bot is closed')
})
