<template>
  <div id="gantt" ref="gantt"></div>
</template>

<script>
/*global gantt*/
import "dhtmlx-gantt";
import TasksService from "../services/gantt/tasksService";
import LinksService from "../services/gantt/linksService";
import "dhtmlx-gantt/codebase//locale/locale_fr.js"



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
        this.addTask(task);
        if (gantt.getSelectedId() == id) {
          this.$emit("task-selected", task);
        }
      });

      gantt.attachEvent("onAfterTaskUpdate", (id, task) => {
        this.$emit("task-updated", id, "updated", task);
        if(task.id !== undefined){
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
        this.addLink(link);
      });

      gantt.attachEvent("onAfterLinkUpdate", (id, link) => {
        this.$emit("link-updated", id, "updated", link);
        this.updateLink(id, link);
      });

      gantt.attachEvent("onAfterLinkDelete", id => {
        this.$emit("link-updated", id, "deleted");
        this.deleteLinkById(id);
      });
      gantt.$_eventsInitialized = true;
      gantt.config.readonly = this.$props.readonly;
      gantt.l
    }
  },

  mounted() {
    this.$_initGanttEvents();
    gantt.init(this.$refs.gantt);
    this.initData().then(data => {
       gantt.parse(data);
    });
   
  }
};
</script>

<style>
@import "~dhtmlx-gantt/codebase/dhtmlxgantt.css";

#gantt {
  height: 20em;
}
</style>