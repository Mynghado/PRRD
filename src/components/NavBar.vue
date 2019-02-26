<template>
  <v-layout row>
    <v-flex xs12>
    <v-toolbar flat dense>
      <v-toolbar-title class="text-uppercase">Bibliothèque sainte geneviève</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-for="link in links" :key="link.text" :to="link.route">{{ link.text }}</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      drawer: false,
      snackbar: false,
      authenticated: localStorage.getItem("connected"),
      links: [
        {
          text: "Accueil",
          route: "/"
        },
        {
          text: "Suivi de projets",
          route: "/project_list"
        },
        {
          text: "Equipe",
          route: "/team"
        },
        {
          text: "A propos",
          route: "/about"
        },
        {
          text: "S'identifier",
          route: "/sign"
        }
      ]
    };
  }
};
</script>

<style>
</style>
