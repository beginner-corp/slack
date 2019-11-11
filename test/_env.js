var env = require('node-env-file')
var path = require('path')

// loads .env variables to test locally
module.exports = function envForTesting() {
  let env = process.env
  let mode = env.NODE_ENV
  let isDev = typeof mode === 'undefined' || mode === 'development'
  let hasVars = env.SLACK_BOT_TOKEN && env.SLACK_CLIENT_ID && env.SLACK_CLIENT_SECRET
  if (isDev && !hasVars) {
    env(path.join(process.cwd(), '.env'))
  }
}
