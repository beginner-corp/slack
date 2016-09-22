import accessLogs from './team.accessLogs'
import billableInfo from './team.billableInfo'
import info from './team.info'
import integrationLogs from './team.integrationLogs'
import profileGet from './team.profile.get'

export default {
  accessLogs,
  billableInfo,
  info,
  integrationLogs,
  profile: {
    get: profileGet
  }
}
