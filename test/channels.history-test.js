import test from 'tape'
import list from '../src/channels.list'
import history from '../src/channels.history'
import env from './_env'
// load SLACK_TOKEN for testing
env()
var fs = require('fs');
//var json_data = require('./channel_data.json')
test('can list channels and get history', t=> {
  let token = process.env.SLACK_BOT_TOKEN
  let exclude_archived = 1
  let params = {token, exclude_archived}
  list(params, (err, json)=> {
    if (err) {
      t.fail(err, 'channels.list fails')
      console.error(err)
    }
    else {
      t.ok(json, 'listed channels')
      console.log(json)
      // get the history for the first one
      let channel = json.channels.filter(c=> c.name === 'daily_status')[0].id
      let params = {token, channel}
      history(params, (err, data)=> {
        if (err) {
          t.fail(err, err)
        }
        else {
          t.ok(data, 'got history')
          console.log(data)
          var datax=[]
          var now = new Date();
          console.log("Todays Date="+ now)
          var json_data = JSON.parse(JSON.stringify(data))
          for(var i=0; i < json_data.messages.length; i++) {
	 // if(data.messages[i].attachments && now.getUTCDate() == theDate.getUTCDate()&& now.getUTCMonth() == theDate.getUTCMonth() && now.getUTCFullYear() ==               theDate.getUTCFullYear() ) {
    if(json_data.messages[i].attachments 
     && new Date(json_data.messages[i].ts * 1000).toISOString().substr(0,10) == new Date().toISOString().substr(0,10)){

     datax.push(json_data.messages[i])
 }
}
json_data.messages = datax	
var jsonData=JSON.stringify(json_data,null,'\t')		
fs.writeFile("channel_data.json",jsonData, function(err) {
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

