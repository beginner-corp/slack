import getPresence from './users.getPresence'
import getProfile from './users.profile.get'
import identity from './users.identity'
import info from './users.info'
import list from './users.list'
import setActive from './users.setActive'
import setPresence from './users.setPresence'
import setProfile from './users.profile.set'

export default {
  getPresence, 
  identity,
  info,
  list,
  profile: {
    get: getProfile,
    set: setProfile
  },
  setActive,
  setPresence
}
