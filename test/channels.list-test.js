import test from 'tape'
import list from '../src/channels.list'
import env from './_env'
// load SLACK_BOT_TOKEN for testing
env()

test('can list channels', t=> {
  let token = process.env.SLACK_BOT_TOKEN
  let exclude_archived = 1
  let params = {token, exclude_archived}
  list(params, (err, data)=> {
    if (err) {
      t.fail(err, 'channels.list fails')
      console.error(err)
    }
    else {
      t.ok(data, 'listed channels')
      console.log(data)
    }
    t.end()
  })
})
