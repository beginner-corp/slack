var env = require('node-env-file')
var path = require('path')

// loads .env variables to test locally
module.exports = function envForTesting() {
  let mode = process.env.NODE_ENV
  let isDev = typeof mode === 'undefined' || mode === 'development'
  if (isDev) {
    env(path.join(process.cwd(), '.env'))
  }
}
