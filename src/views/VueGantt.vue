<template>
  <div class="container">
    <gantt class="left-container"></gantt>
  </div>
</template>

<script>
import Gantt from "../components/Gantt";
import TasksService from "../services/gantt/tasksService";

export default {
  /* eslint-disable */
  name: "app",
  components: { Gantt },
  data() {
    return {};
  },
  filters: {},
  methods: {
    async fetchTasksWithLinksByProjectId(projectId) {
      const response = await TasksService.fetchTasksWithLinksByProjectId(
        projectId
      );
      return response.data;
    }
  },
  mounted() {
    gantt.clearAll();
    gantt.config.readonly = false;
    let projectId = this.$route.params.projectId;
    this.fetchTasksWithLinksByProjectId(projectId).then(data => {
      if (data) {
        gantt.parse(data);
      }
    });
  },
  updated() {},
  destroyed() {}
};
</script>
<style>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.container {
  height: 100%;
  width: 100%;
}

.left-container {
  overflow: hidden;
  position: relative;
  height: 100%;
}

.right-container {
  border-right: 1px solid #cecece;
  float: right;
  height: 100%;
  width: 340px;
  box-shadow: 0 0 5px 2px #aaa;
  position: relative;
  z-index: 2;
}

.gantt-messages {
  list-style-type: none;
  height: 50%;
  margin: 0;
  overflow-x: hidden;
  overflow-y: auto;
  padding-left: 5px;
}

.gantt-messages > .gantt-message {
  background-color: #f4f4f4;
  box-shadow: inset 5px 0 #d69000;
  font-family: Geneva, Arial, Helvetica, sans-serif;
  font-size: 14px;
  margin: 5px 0;
  padding: 8px 0 8px 10px;
}

.gantt-selected-info {
  border-bottom: 1px solid #cecece;
  box-sizing: border-box;
  font-family: Geneva, Arial, Helvetica, sans-serif;
  height: 50%;
  line-height: 28px;
  padding: 10px;
}

.gantt-selected-info h2 {
  border-bottom: 1px solid #cecece;
}

.select-task-prompt h2 {
  color: #d9d9d9;
}
</style>