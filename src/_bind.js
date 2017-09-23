var api = require('./api.json')

/**
 * reads api.json and generates a matching javascript object
 * the leaf nodes bind the method name to the passed in exec function
 */
module.exports = function _bind(ns, exec) {

  // walks the generated api.json keys dynamically constructing the client
  Object.keys(api).forEach(key=> {

    // each key is namespaced so we break up into an array to work with 
    // example: api.test --> ['api', 'test']
    var parts = key.split('.')

    // then we get the root part of the namespace
    // example: 'api'
    var root = parts.shift() 
  
    // initialize the root namespace object if it wasn't already
    var init = typeof ns[root] === 'undefined'
    if (init) {
      ns[root] = {} 
    }

    // walks the remaining namespace parts assigning the _exec function at the end
    ;(function _iterator(o) {
      var bit = parts.shift()
      var last = parts.length === 0
      if (last) {
        o[bit] = exec.bind({}, key)
      }
      else {
        var init = typeof o[bit] === 'undefined'
        if (init) {
          o[bit] = {}
        }
        // keep iterating
        _iterator(o[bit])
      }
    })(ns[root])
  })

  return ns
}
