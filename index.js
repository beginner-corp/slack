let bind = require('./_bind')
let exec = require('./_exec')
let factory = require('./_factory')

/**
 * bind accepts an object, in this case the factory function, and 
 * applies exec to the Slack API methods as defined in api.json
 */
module.exports = bind(factory, exec)
