<template>
  <div id="gantt" ref="gantt"></div>
</template>

<script>

/*global gantt*/
import 'dhtmlx-gantt'
import TasksService from '../services/tasksService'

export default {
  name: 'gantt',
  props: {
    tasks: {
      type: Object,
      default () {
        return {data: [], links: []}
      }
    },
    readonly: Boolean
  },

  methods: {
    async getTasks(){
      const response = await TasksService.fetchTasks();
      console.log(response.data);
    },
    async addTask(task){
      const response = await TasksService.addTask(task);
      console.log(response.data);
    },

    $_initGanttEvents: function () {
      if(gantt.$_eventsInitialized)
        return;
      gantt.attachEvent('onTaskSelected', (id) => {
        let task = gantt.getTask(id)
        this.$emit('task-selected', task)
      })

      gantt.attachEvent('onAfterTaskAdd', (id, task) => {
        this.$emit('task-updated', id, 'inserted', task)
        task.progress = task.progress || 0
        this.addTask(task);
        if(gantt.getSelectedId() == id) {
          this.$emit('task-selected', task)
        }
      })

      gantt.attachEvent('onAfterTaskUpdate', (id, task) => {
        this.$emit('task-updated', id, 'updated', task)
      })

      gantt.attachEvent('onAfterTaskDelete', (id) => {
        this.$emit('task-updated', id, 'deleted')
        if(!gantt.getSelectedId()) {
          this.$emit('task-selected', null)
        }
      })

      gantt.attachEvent('onAfterLinkAdd', (id, link) => {
        this.$emit('link-updated', id, 'inserted', link)
      })

      gantt.attachEvent('onAfterLinkUpdate', (id, link) => {
        this.$emit('link-updated', id, 'updated', link)
      })

      gantt.attachEvent('onAfterLinkDelete', (id) => {
        this.$emit('link-updated', id, 'deleted')
      })
      gantt.$_eventsInitialized = true;
      gantt.config.readonly = this.$props.readonly;
    }
    
  },
    
  mounted () {
    this.$_initGanttEvents()

    gantt.init(this.$refs.gantt)
    gantt.parse(this.$props.tasks)
    this.getTasks();
  }
}
</script>

<style>
  @import "~dhtmlx-gantt/codebase/dhtmlxgantt.css";

#gantt{
    height: 20em;
  }

</style>