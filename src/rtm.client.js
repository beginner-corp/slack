import start from './rtm.start'
import events from './rtm.events'
import WebSocket from 'ws'


export default function client() {

  let bot = {handlers:{}}
  
  events.forEach(e=> {
    bot.handlers[e] = []
    bot[e] = function(handler) {
      bot.handlers[e].push(handler)
    }
  })

  bot.listen = function botListen(params) {
    start(params, (err, data)=> {

      bot.ws = new WebSocket(data.url)

      bot.ws.on('message', function message(data, flags) {
        let json = JSON.parse(data)
        bot.handlers[json.type].forEach(m=> m.call({}, data))
      })
    })
  }

  bot.close = function botClose() {
    bot.ws.close()
  }

  return bot
}
