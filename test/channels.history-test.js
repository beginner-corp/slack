import test from 'tape'
import list from '../src/channels.list'
import history from '../src/channels.history'
import env from './_env'
// load SLACK_TOKEN for testing
env()

test('can list channels and get history', t=> {
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

      // get the history for the first one
      let channel = data.channels[0].id
      history({token, channel}, (err, data)=> {
        if (err) {
          t.fail(err, err)
        }
        else {
          t.ok(data, 'got history')
          console.log(data)
        }
        t.end()
      })
    }
  })
})
