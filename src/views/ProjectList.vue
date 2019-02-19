<template>
<div id="ProjectList">
    <v-container class="my-5">
      <v-layout row justify-start class="mb-3">
        <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('name')" slot="activator">
            <v-icon small left>create</v-icon>
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
      </v-layout>
      
      <v-card flat v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 project ${project.class}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Nom du projet</div>
            <div>{{ project.name }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Chef de projet</div>
            <div>{{ project.manager }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Date butoir</div>
            <div>{{ project.marker }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="right hidden-xs-only">
              <v-chip small :class="`${project.class} white--text my-2 caption`">{{ project.status }}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
</div>
</template>

<script>
export default {
    name: 'ProjectList',
    data() {
        return {
            projects: [
                { name: 'Nouvelle gestion des projets', manager: 'Laurent Poligny', marker: '2019-01-18', status: 'en cours', class: 'ongoing'},
                { name: 'Archivage des enluminures au CINES', manager: 'Geneviève Boyer', marker: '2023-03-12', status: 'en cours', class: 'ongoing'},
                { name: 'Évènement tournage', manager: 'Marie Dubois', marker: '2017-12-23', status: 'terminé', class: 'done'},
                { name: 'Catalogue des Incunables', manager: 'Jean Dupont', marker: '2019-02-11', status: 'retardé', class: 'late'}
            ]
        }
    },
    methods: {
        sortBy(prop) {
            this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
        }
    }
}
</script>

<style>
.project.done{
  border-left: 4px solid rgb(15, 143, 58);
}
.project.ongoing{
  border-left: 4px solid #ffaa2c;
}
.project.late{
  border-left: 4px solid #b31111;
}
.v-chip.done{
  background: rgb(15, 143, 58);
}
.v-chip.ongoing{
  background: #ffaa2c;
}
.v-chip.late{
  background: #b31111;
}
</style>
