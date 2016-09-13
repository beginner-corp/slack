import del from './files.delete'
import info from './files.info'
import list from './files.list'
import upload from './files.upload'

import filesCommentsAdd from './files.comments.add'
import filesCommentsDelete from './files.comments.delete'
import filesCommentsEdit from './files.comments.edit'
import revokePublicURL from './files.revokePublicURL'
import sharedPublicURL from './files.sharedPublicURL'

export default {
  delete: del,
  info,
  list,
  upload,
  comments: {
    add: filesCommentsAdd,
    delete: filesCommentsDelete,
    edit: filesCommentsEdit
  },
  revokePublicURL,
  sharedPublicURL
}
