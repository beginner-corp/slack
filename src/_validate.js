//
// validate returns an error object if any required params are missing
//
// example usage:
// 
//   // token and id are required params
//   function apiCall(params, callback) { 
//     let err = validate('api.signature', params, 'token', 'id')
//     if (err) {
//       callback(err)
//     }
//     else {
//       // do api call
//     }
//   }
//
export default function valid(method, params, ...req) {
  let bad = req.filter(k=> typeof params[k] === 'undefined')
  let err = bad.length? Error(`${method} missing params: ${bad.join(', ')}`) : false
  return err
}
