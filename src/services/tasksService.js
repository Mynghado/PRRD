import TaskApi from '../api/taskApi'

export default {
  fetchTasks () {
    return TaskApi().get();
  },
  addTask(task){
      return TaskApi().post('',task);
  }
}