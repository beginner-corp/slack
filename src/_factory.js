var bind = require('./_bind')
var exec = require('./_exec')

/** 
 * factory returns a new instance of Slack
 * 
 * things to understand:
 *
 * - this function is the root object exported 
 * - can be a constuctor for creating oo style instances of Slack 
 * - requires named params to allow for future flexability in the function sig
 * - all methods have token pre applied
 * - all methods either accept a callback or return a promise
 */
module.exports = function factory(xxx) {
  
  if (!xxx) xxx = {}

  // Slack instance applies the token param to all the api methods
  class Slack {
    constructor() {
      function _execWithToken(method, params, callback) {
        if(!params) params = {}
        params.token = params.token || xxx.token
        return exec(method, params, callback)
      }
      // bind applies the above method to this obj
      // bind also returns all methods promisified
      bind(this, _execWithToken)
    }
  }

  return new Slack
}
