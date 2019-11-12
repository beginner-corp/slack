var env = require('node-env-file')
var path = require('path')

// loads .env variables to test locally
module.exports = function envForTesting() {
  let hasVars = process.env.SLACK_BOT_TOKEN &&
                process.env.SLACK_CLIENT_ID &&
                process.env.SLACK_CLIENT_SECRET
  if (!hasVars) {
    env(path.join(process.cwd(), '.env'))
  }
}
