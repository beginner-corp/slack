import start from './rtm.start'
import events from './rtm.events'

// socket factory
export default function client() {

  // build a new bot every time
  let bot = {
    handlers: {
      started: []
    }
  }

  // add undocumented ping event
  events.push('pong')
  
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
      if (err) {
        if (callback) callback(err)
        else throw err
      }
      else {
        // grab a handle on the socket
        bot.ws = new WebSocket(data.url)
        // delegate everything
        bot.ws.onmessage = function message(e) {
          let json = JSON.parse(e.data)
          let handler = bot.handlers[json.type]
          if (handler) {
            handler.forEach(m=> m.call({}, json))
          }
          else {
            console.error("Unknown message type: " + json);
          }
        }
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
