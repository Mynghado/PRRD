<template>
  <v-layout row>
    <v-flex xs4 ma-5>
      <v-img :src="logo" width="25%"></v-img>
    </v-flex>
    <v-flex xs8 ma-5>
      <v-toolbar flat dense>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn active-class="linkActive" flat to="/">Accueil</v-btn>
          <v-btn active-class="linkActive" flat to="/project_list">Suivi de projets</v-btn>
          <v-btn active-class="linkActive" flat to="/team">Equipe</v-btn>
          <v-btn active-class="linkActive" flat to="/about">A propos</v-btn>
          <v-btn active-class="linkActive" flat to="/login" v-if="!isLoggedIn">S'identifier</v-btn>
          <v-btn active-class="linkActive" flat to="/login" v-if="isLoggedIn" @click="logout">Se déconnecter</v-btn>
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
      logo: require("../assets/logo.png")
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
.linkActive {
  color: #367635 !important;
  background-color: unset !important;
}

.v-btn--router:hover {
  color: #367635 !important;
}

.v-btn:hover:before{
    background-color: unset !important;
}
</style>
