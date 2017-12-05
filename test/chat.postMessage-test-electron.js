const test = require('tape')
const Slack = require('..')
const electron = require('electron')

// load SLACK_BOT_TOKEN for testing
var env = require('./_env')
env()

test('can post a message', t=> {
  t.plan(1)
  let token = process.env.SLACK_BOT_TOKEN
  let slack = new Slack({token, useElectronNet:electron.remote.net})
  let text = 'test message'
  // list channels
  slack.channels.list({}, (err, json)=> {
    // look for a channel called 'test'
    let channel = json.channels.filter(c=> c.name === 'test')[0].id
    let params = {text, channel}
    // post a message there
    slack.chat.postMessage(params, (err, data)=> {
      if (err) {
        t.fail(err, 'chat.postMessage fails')
        console.error(err)
      }
      else {
        t.ok(data, 'posted a message')
        console.log(data)
      }
    })
  })
})

/*
test('can post a message with attachment as array', t=> {
  let token = process.env.SLACK_BOT_TOKEN
  let text = 'test message'
  // list channels
  list({token}, (err, json)=> {
    // look for a channel called 'test'
    let channel = json.channels.filter(c=> c.name === 'test')[0].id
    let attachments = [{ text: "feeling attached" }]
    let params = {token, text, channel, attachments}
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
})*/
