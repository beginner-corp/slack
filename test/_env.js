var env = require('node-env-file')
var path = require('path')

// loads .env variables to test locally
module.exports = function envForTesting() {
  let mode = process.env.NODE_ENV
  let isDev = typeof mode === 'undefined' || mode === 'development'
  let hasVars = process.env.SLACK_BOT_TOKEN &&
                process.env.SLACK_CLIENT_ID &&
                process.env.SLACK_CLIENT_SECRET
  if (isDev && !hasVars) {
    env(path.join(process.cwd(), '.env'))
  }
}
