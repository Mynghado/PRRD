<template>
  <v-layout row>
    <v-flex xs12>
      <v-toolbar flat dense>
        <v-toolbar-title class="text-uppercase">Bibliothèque sainte geneviève</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat to="/">Accueil</v-btn>
          <v-btn flat to="/project_list">Suivi de projets</v-btn>
          <v-btn flat to="/team">Equipe</v-btn>
          <v-btn flat to="/about">A propos</v-btn>
          <v-btn flat to="/login" v-if="!isLoggedIn">S'identifier</v-btn>
          <v-btn flat to="/login" v-if="isLoggedIn" @click="logout">Se déconnecter</v-btn>
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
    };
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push({ name: "login" });
      });
    }
  }
};
</script>

<style>
</style>
