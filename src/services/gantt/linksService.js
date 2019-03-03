import LinkApi from '../../api/gantt/linkApi'

export default {
  fetchLinks () {
    return LinkApi().get();
  },
  fetchLinkById(id){
    return LinkApi().get(id.toString);
  },
  addLink(link){
      return LinkApi().post('',link);
  },
  updateLink(id, link){
    return LinkApi().put(id.toString(),link)
  },
  deleteLink(id){
    return LinkApi().delete(id.toString())
  }
}