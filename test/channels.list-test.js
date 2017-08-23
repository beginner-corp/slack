import test from 'tape'
import list from '../src/channels.list'
import env from './_env'
// load SLACK_BOT_TOKEN for testing
env()
var fs = require('fs');
test('can list channels', t=> {
  let token = process.env.SLACK_BOT_TOKEN
  let exclude_archived = 1
  let params = {token, exclude_archived}
  list(params, (err, json)=> {
    if (err) {
      t.fail(err, 'channels.list fails')
      console.error(err)
    }
    else {
      //t.ok(data, 'listed channels')
      //console.log(json)
      let channel = json.channels.filter(c=> c.name === 'daily_status')[0].id
      let params = {token, channel}
      list(params, (err, data)=> {
        if (err) {
          t.fail(err, 'channels.list fails')
          console.error(err)
        }
        else {
          t.ok(data, 'listed channels')
          console.log(data)
          var jsonData=JSON.stringify(data,null,'\t')    
          fs.writeFile("channel_list.json",jsonData, function(err) {
            if(err) {
              return console.log(err);
            }
          });
        }
        t.end()
      })
    }
  })
})

