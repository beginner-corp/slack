import slack from '../'
import test from 'tape'
import env from './_env'

// load SLACK_BOT_TOKEN for testing
env()

let bot;

test('bot starts', t=> {
  t.plan(3)
  let token = process.env.SLACK_BOT_TOKEN

  bot = slack.rtm.client()
  console.log(bot)

  bot.message(msg=> {
    console.log('got a message GENERIC', msg)
  })

  // define a hello handler
  bot.hello(msg=> {
    t.ok(msg, 'got a hello message')
    console.log(msg)
  })

  // define a ping handler
  bot.pong(msg=> {
    t.ok(msg, 'got a ping message')
    console.log(msg)
  })

  bot.listen({token}, (err, d)=> {
    t.ok(d, 'got init data')
    setTimeout(x=> {
      bot.ws.send(JSON.stringify({id:1, type:'ping'}))
    }, 1000)
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
  let otherbot = slack.rtm.client()

  otherbot.listen({token}, (err, d)=> {
    t.ok(err, 'got the error')
    console.log(err)
  })
})
