import TaskApi from '../../api/gantt/taskApi'

export default {
  fetchTasks () {
    return TaskApi().get();
  },
  fetchTasksWithLinks () {
    return TaskApi().get('/withLinks');
  },
  fetchTasksWithLinksByProjectId (projectId) {
    return TaskApi().get(projectId.toString());
  },
  getTaskById(id){
    return TaskApi().get(id.toString());
  },
  addTask(task){
      return TaskApi().post('',task);
  },
  updateTaskById(id, task){
    return TaskApi().put(id.toString(),task)
  },
  deteleTaskById(id){
    return TaskApi().delete(id.toString())
  }
}