<template>
  <v-container>
    <v-layout align-start justify-center row>
      <h1>Bienvenue</h1>
    </v-layout>

    <v-layout row>
      <v-flex xs12>
        <div class="container">
          <gantt class="left-container" :tasks="tasks"></gantt>
        </div>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs4 ma-5>
        <v-card>
          <v-img
            src="https://i0.wp.com/www.stjust34.com/wp-content/uploads/2016/07/bibliotheque.jpg?fit=1030%2C687"
          ></v-img>
        </v-card>
      </v-flex>
      <v-flex xs4 ma-5>
        <v-card>
          <v-img
            src="https://i0.wp.com/www.stjust34.com/wp-content/uploads/2016/07/bibliotheque.jpg?fit=1030%2C687"
          ></v-img>
        </v-card>
      </v-flex>
      <v-flex xs4 ma-5>
        <v-card>
          <v-img
            src="https://i0.wp.com/www.stjust34.com/wp-content/uploads/2016/07/bibliotheque.jpg?fit=1030%2C687"
          ></v-img>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs4 mr-5>
        <v-card>
          <v-img
            src="https://i0.wp.com/www.stjust34.com/wp-content/uploads/2016/07/bibliotheque.jpg?fit=1030%2C687"
          ></v-img>
        </v-card>
      </v-flex>
      <v-flex xs8>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Edito</h3>
              <div>{{ card_text }}</div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Gantt from "../components/Gantt";
export default {
  name: "Home",
  components: { Gantt },
  data() {
    return {
      tasks: {
        data: [
          {
            id: 1,
            text: "Task #1",
            start_date: "15-04-2017",
            duration: 3,
            progress: 0.6
          },
          {
            id: 2,
            text: "Task #2",
            start_date: "18-04-2017",
            duration: 3,
            progress: 0.4
          }
        ],
        links: [{ id: 1, source: 1, target: 2, type: "0" }]
      },
      selectedTask: null,
      messages: [],
      card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
    };
  },

  mounted(){
    gantt.config.readonly=true;
  },
  updated(){
  },
  destroyed(){
  }
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
