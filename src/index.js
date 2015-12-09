import apiTest from './api.test'
import authTest from './auth.test'
import oauthAccess from './oauth.access'

let describe = `
  slack
    api.test(params, (err, data)=>)
    auth.test(
    oauth.access
`

// the whole thing
export default {

  describe,

  api: {
    test: apiTest     
  },

  auth: {
    test: authTest
  },

  oauth: {
    access: oauthAccess       
  }
/// eom
}
