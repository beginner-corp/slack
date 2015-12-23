//
// validate returns an error object if any required params are missing
//
// example usage:
// 
//   // token and id are required params
//   function apiCall(params, callback) { 
//     let err = validate('api.signature', params)
//     if (err) {
//       callback(err)
//     }
//     else {
//       // do api call
//     }
//   }
//
import api from './api.json'

export default function validate(method, params) {
  // get all the requried params for this method
  let required = api[method].filter(param=>param.required === 'Required')
  // collect any missing params
  let missing = required.filter(param=> typeof params[param.name] === 'undefined')
  // optimisitcally assume the best
  var err = false
  // but have a plan for the worst
  if (missing.length) {
    let bullets = missing.map(param=> `- ${param.name} ... ${param.description}`)
    let msg = `${method} missing params:\n${bullets.join('\n')}`
    err = Error(msg)
  }
  return err
}
