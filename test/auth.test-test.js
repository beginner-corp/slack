var test = require('tape')
var auth = require('..').auth.test
var env = require('./_env')
// load SLACK_TOKEN for testing
env()

test('sanity', t=> {
  auth({token:process.env.SLACK_BOT_TOKEN}, (err, data)=> {
    if (err) {
      t.fail(err, 'auth could not be tested!')
      console.error(err)
    }
    else {
      t.ok(data, 'auth test worked')
      console.log(data)
    }
    t.end()
  })  
})
