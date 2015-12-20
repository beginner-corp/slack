import slack from '../'
import test from 'tape'
import env from './_env'

env()

let bot = slack.rtm.client()
let token = process.env.SLACK_TOKEN

test('sanity', t=> {
  t.plan(1)
  t.ok(bot, 'got a bot')
  console.log(bot)
})


test('bot starts', t=> {
  // define a hello handler
  bot.hello(function (msg) {
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
