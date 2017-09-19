var bind = require('./_bind')
var exec = require('./_exec')
// slack.api.client returns client with params.token applied by the factory constructor function
//
// example:
//
//   slack = require('slack')
//   bot = slack.api.client(token)
//
//   bot.api.test({ping: 'pong'}, console.log)
//
module.exports = function _client(token) {
  function _execWithToken(method, params, callback) {
    params.token = token
    exec(method, params, callback)
  }
  return bind(_execWithToken)
}
