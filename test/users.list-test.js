import test from 'tape'
import list from '../src/users.list'
import env from './_env'
// load SLACK_BOT_TOKEN for testing
env()
var fs = require('fs');
test('can list users', t=> {
  let token = process.env.SLACK_BOT_TOKEN
  list({token}, (err, data)=> {
    if (err) {
      t.fail(err, 'users.list fails')
      console.error(err)
    }
    else {
      t.ok(data, 'listed users')
      console.log(data)
	//var datax = []
	var datax=[]
	var json_data= JSON.parse(JSON.stringify(data))
	for(var i=0; i < json_data.members.length; i++) {
		var temp = {};
            temp['id'] = json_data.members[i].id
            temp['real_name'] = json_data.members[i].real_name
            datax.push(temp)
	}
	json_data.members = datax
	var jsonData=JSON.stringify(json_data,null,'\t')
          fs.writeFile("users_list.json",jsonData, function(err) {
          if(err) {
                 return console.log(err);
                 }
        });
    }
    t.end()
  })
})
