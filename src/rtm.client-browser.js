import start from './rtm.start'
import events from './rtm.events'

// socket factory
export default function client() {

  // build a new bot every time
  let bot = {handlers:{}}
  
  // generate event handler registration methods
  events.forEach(e=> {
    bot.handlers[e] = []
    bot[e] = function(handler) {
      bot.handlers[e].push(handler)
    }
  })

  // kicks up a web socket connection
  bot.listen = function botListen(params) {
    start(params, (err, data)=> {
      if (err) {
        console.error(err, data)
      }
      else {
        // grab a handle on the socket
        bot.ws = new WebSocket(data.url)
        // delegate everything
        bot.ws.onmessage = function message(e) {
          let json = JSON.parse(e.data)
          bot.handlers[json.type].forEach(m=> m.call({}, json))
        }
      }
    })
  }

  // closes the socket
  bot.close = function botClose() {
    bot.ws.close()
  }

  //////////
  return bot
}
