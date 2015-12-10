import api from './api.test'
import test from './auth.test'
import access from './oauth.access'

let describe = `
  slack
    api.test(params, (err, data)=>)
    auth.test(token, (err, data)=>)
    oauth.access
`

export default {
  describe,
  api: {test:api},
  auth: {test},
  oauth: {access}
}
