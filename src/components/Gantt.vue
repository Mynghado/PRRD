<template>
  <div id="gantt" ref="gantt"></div>
</template>

<script>
/*global gantt*/
import "dhtmlx-gantt";
import TasksService from "../services/gantt/tasksService";
import LinksService from "../services/gantt/linksService";
import "dhtmlx-gantt/codebase//locale/locale_fr.js";

export default {
  name: "gantt",
  props: {
    tasks: {
      type: Object,
      default() {
        return { data: [], links: [] };
      }
    },
    readonly: Boolean
  },

  methods: {
    async initData() {
      const response = await TasksService.fetchTasksWithLinks();
      return response.data;
    },
    async addTask(task) {
      await TasksService.addTask(task);
    },
    async updateTask(id, task) {
      await TasksService.updateTaskById(id, task);
    },
    async deteleTaskById(id) {
      await TasksService.deteleTaskById(id);
    },
    async addLink(link) {
      await LinksService.addLink(link);
    },
    async updateLink(id, link) {
      await LinksService.updateLink(link);
    },
    async deleteLinkById(id) {
      await LinksService.deleteLinkById(id);
    },
    $_initGanttEvents: function() {
      if (gantt.$_eventsInitialized) return;
      gantt.attachEvent("onTaskSelected", id => {
        let task = gantt.getTask(id);
        this.$emit("task-selected", task);
      });

      gantt.attachEvent("onAfterTaskAdd", (id, task) => {
        this.$emit("task-updated", id, "inserted", task);
        task.progress = task.progress || 0;
        task.projectId = this.$route.params.projectId;
        this.addTask(task);
        if (gantt.getSelectedId() == id) {
          this.$emit("task-selected", task);
        }
      });

      gantt.attachEvent("onAfterTaskUpdate", (id, task) => {
        this.$emit("task-updated", id, "updated", task);
        if (task.id !== undefined) {
          task.projectId = this.$route.params.projectId;
          this.updateTask(id, task);
        }
      });

      gantt.attachEvent("onAfterTaskDelete", id => {
        this.$emit("task-updated", id, "deleted");
        this.deteleTaskById(id);
        if (!gantt.getSelectedId()) {
          this.$emit("task-selected", null);
        }
      });

      gantt.attachEvent("onAfterLinkAdd", (id, link) => {
        this.$emit("link-updated", id, "inserted", link);
        link.projectId = this.$route.params.projectId;
        this.addLink(link);
      });

      gantt.attachEvent("onAfterLinkUpdate", (id, link) => {
        this.$emit("link-updated", id, "updated", link);
        link.projectId = this.$route.params.projectId;
        this.updateLink(id, link);
      });

      gantt.attachEvent("onAfterLinkDelete", id => {
        this.$emit("link-updated", id, "deleted");
        this.deleteLinkById(id);
      });
      gantt.$_eventsInitialized = true;
      gantt.config.readonly = this.$props.readonly;
    }
  },

  mounted() {
    this.$_initGanttEvents();
    gantt.init(this.$refs.gantt);
  }
};
</script>

<style>
@import "~dhtmlx-gantt/codebase/dhtmlxgantt.css";

#gantt {
  height: 20em;
}
.gantt_save_btn_set {
  background: #367635 !important;
}
.gantt_delete_btn_set {
  background: #961f39 !important;
}
.gantt_ok_button {
  background: #367635 !important;
}
.gantt_task_line {
  background: #367635 !important;
}
.gantt_scale_cell {
  color: #367635 !important;
  font-weight: bold;
}
.gantt_grid_head_cell {
  color: #367635 !important;
  font-weight: bold;
}
.gantt_tree_content{
  color : #961f39 !important;
  font-weight: bold;
}

.gantt_task_link .gantt_line_wrapper div {
  background-color: #961f39;
}

.gantt_task_link:hover .gantt_line_wrapper div {
  box-shadow: 0 0 5px 0px #961f39;
}

.gantt_task_link .gantt_link_arrow_right {
  border-left-color: #961f39;
}

.gantt_task_link .gantt_link_arrow_left {
  border-right-color: #961f39;
}
</style>