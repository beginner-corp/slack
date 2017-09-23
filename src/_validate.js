var api = require('./api.json')

module.exports = function validate(method, params) {
  // get all the requried params for this method
  let required = api[method]
  // collect any missing params
  let missing = required.filter(param=> typeof params[param] === 'undefined')
  // optimistic: assume the best
  var err = false
  // but have a plan for the worst
  if (missing.length) {
    //let bullets = missing.map(param=>param.name)
    let msg = `${method} missing params: ${missing.join(', ')}`
    err = Error(msg)
  }
  return err
}
