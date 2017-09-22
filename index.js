var bind = require('./_bind')
var exec = require('./_exec')
var factory = require('./_factory')

/**
 * bind accepts an object, in this case the factory function, and applies exec to the Slack API methods as defined in api.json
 */
module.exports = bind(factory, exec)
