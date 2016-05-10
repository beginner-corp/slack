import start from './rtm.start'
import events from './rtm.events'
import WebSocket from 'ws'

// socket factory
export default function client() {

  // build a new bot every time
  let bot = {
    handlers: {
      started: []
    }
  }

  // generate event handler registration methods
  events.forEach(e=> {
    bot.handlers[e] = []
    bot[e] = function(handler) {
      bot.handlers[e].push(handler)
    }
  })

  bot.started = function(handler) {
    bot.handlers['started'].push(handler)
  }

  // kicks up a web socket connection
  bot.listen = function botListen(params, callback) {
    start(params, (err, data)=> {
      // grab a handle on the socket
      if (err) {
        if (callback) callback(err)
        else throw err
      }
      else {
        bot.ws = new WebSocket(data.url)
        // delegate everything
        bot.ws.on('message', function message(data, flags) {
          let json = JSON.parse(data)
          let handlers = bot.handlers[json.type] || []
          handlers.forEach(m=> m.call({}, json))
        })
        // call started callbacks
        bot.handlers['started'].forEach(m=> m.call({}, data))
        if (callback) callback(null, data)
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
