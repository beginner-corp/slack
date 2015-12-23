import test from 'tape'
import auth from '../src/auth.test'
import env from './_env'
// load SLACK_TOKEN for testing
env()

test('sanity', t=> {
  auth({token:process.env.SLACK_TOKEN}, (err, data)=> {
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
