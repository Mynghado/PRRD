import ProjectApi from '../api/projectApi'

export default {
  fetchProjects () {
    return ProjectApi().get();
  },
  fetchProjectById(id){
    return ProjectApi().get(id.toString());
  },
  addProject(project){
    return ProjectApi().post('',project);
  },
  updateProject(id, project){
    return ProjectApi().put(id.toString(),project)
  },
  deleteProject(id){
    return ProjectApi().delete(id.toString())
  }
}