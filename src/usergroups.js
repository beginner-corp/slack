import create from './usergroups.create'
import disable from './usergroups.disable'
import enable from './usergroups.enable'
import list from './usergroups.list'
import update from './usergroups.update'
import usersList from './usergroups.users.list'
import usersUpdate from './usergroups.users.update'

export default {
  create,
  disable,
  enable,
  list,
  update,
  users: {
    list: usersList,
    update: usersUpdate
  }
}
