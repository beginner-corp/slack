var bind = require('./_bind')
var exec = require('./_exec')
// var client = require('./_client')

module.exports = class Slack {
  constructor(params) {
    function _execWithToken(method, params, callback) {
      params.token = token
      exec(method, params, callback)
    }
    Object.assign(this, bind(_execWithToken))
    // bind(_execWithToken)
    // Object.assign(this, bind(exec))
    // this.api.client = client
  }
}

// module.exports = bind(exec)
// module.exports.api.client = client
