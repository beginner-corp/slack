import test from 'tape'
import info from '../src/team.info'
import env from 'node-env-file'
import path from 'path'

// load SLACK_TOKEN for testing
env(path.join(process.cwd(), '.env'))

test('can get team info', t=> {
  let token = process.env.SLACK_TOKEN
  info(token, (err, data)=> {
    if (err) {
      t.fail(err, 'team.info fails')
      console.error(err)
    }
    else {
      t.ok(data, 'got team info')
      console.log(data)
    }
    t.end()
  })  
})
