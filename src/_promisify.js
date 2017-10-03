module.exports = function _promisify(orig) {
  return function(...args) {
    return new Promise(function(resolve, reject) {
      function errback(err, result) {
        if (err) {
          reject(err)
        }
        else {
          resolve(result)
        }
      }
      args.push(errback)
      orig.apply({}, args)
    })
  }
}
