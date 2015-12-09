import test from 'tape'
import auth from '../src/auth.test'
import env from 'node-env-file'
import path from 'path'

// load SLACK_TOKEN for testing
env(path.join(process.cwd(), '.env'))

test('sanity', t=> {
  auth((err, data)=> {
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
