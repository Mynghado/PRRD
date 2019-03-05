<template>
  <div id="ProjectList">
    <v-container class="my-5">
      <v-layout row justify-start class="mb-3">
        <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('name')" slot="activator">
            <v-icon small left>folder</v-icon>
            <span class="caption text-lowercase">Par nom de projet</span>
          </v-btn>
          <span>Trier en fonction du nom du projet</span>
        </v-tooltip>
        <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('manager')" slot="activator">
            <v-icon small left>person</v-icon>
            <span class="caption text-lowercase">Par chef de projet</span>
          </v-btn>
          <span>Trier en fonction du chef du projet</span>
        </v-tooltip>
        <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('name')" slot="activator">
            <v-icon small left>create</v-icon>
            <span @click="goToAddProject()" class="caption text-lowercase">Creer un nouveau suivi de projet</span>
          </v-btn>
        </v-tooltip>
      </v-layout>

      <v-card flat v-for="project in projects.data" :key="project._id">
        <v-layout @click="goToGantt()" row wrap :class="`pa-3 project `">
          <v-flex xs12 md6>
            <div class="caption grey--text">Nom du projet</div>
            <div>{{ project.project_name }}</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Chef de projet</div>
            <div>{{ project.project_manager }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Date butoir</div>
            <div>{{ project.marker }}</div>
          </v-flex>
          <!--<v-flex xs2 sm4 md2>
            <div class="right hidden-xs-only">
              <v-chip
                small
                :class="`${project.class} white--text my-2 caption`"
              >{{ project.status }}</v-chip>
            </div>
          </v-flex>-->
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import serviceProject from "../services/projectService";

export default {
  /* eslint-disable */
  name: "ProjectList",
  data() {
    return {
      projects: [
        {
          _id: '',
          project_name: '',
          project_manager: '',
          marker: ''
        }
      ]
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
    goToGantt() {
      this.$router.push({ name: "gantt" });
    },
    goToAddProject(){
       this.$router.push({ name: "addProject" });
    },
    async loadDatas() {
      try {
        this.projects = await serviceProject.fetchProjects();
      } catch (err) {}
    }
  },

  beforeMount() {
    this.loadDatas()
  }
};
</script>

<style>
.project.done {
  border-left: 4px solid rgb(15, 143, 58);
}
.project.ongoing {
  border-left: 4px solid #ffaa2c;
}
.project.late {
  border-left: 4px solid #b31111;
}
.v-chip.done {
  background: rgb(15, 143, 58);
}
.v-chip.ongoing {
  background: #ffaa2c;
}
.v-chip.late {
  background: #b31111;
}
</style>
