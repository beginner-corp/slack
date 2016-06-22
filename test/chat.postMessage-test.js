import test from 'tape'
import list from '../src/channels.list'
import msg from '../src/chat.postMessage'
import env from './_env'
// load SLACK_BOT_TOKEN for testing
env()

test('can post a message', t=> {
  let token = process.env.SLACK_BOT_TOKEN
  let text = 'test message'
  // list channels
  list({token}, (err, json)=> {
    // look for a channel called 'test'
    let channel = json.channels.filter(c=> c.name === 'test')[0].id
    let params = {token, text, channel}
    // post a message there
    msg(params, (err, data)=> {
      if (err) {
        t.fail(err, 'chat.postMessage fails')
        console.error(err)
      }
      else {
        t.ok(data, 'posted a message')
        console.log(data)
      }
      t.end()
    })
  })
})
