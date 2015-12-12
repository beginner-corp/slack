// helper that returns an error if any method params are missing
export default function required(method, params, ...req) {
  let bad = req.filter(k=> typeof params[k] === 'undefined')
  let err = bad.length? Error(`${method} missing params: ${bad.join(', ')}`) : false
  return err
}
