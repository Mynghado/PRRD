<template>
  <div id="login">
    <v-container>
      <v-layout row>
        <v-flex xs12 sm8 offset-sm2 md6 offset-md3 lg4 offset-lg4>
          <v-card>
            <v-card-title>
              <v-container class="text-xs-center">
                <h1>Connexion</h1>
              </v-container>
            </v-card-title>
            <v-card-text>
              <form>
                <v-flex xs12>
                  <v-text-field
                    v-model="nomUtilisateur"
                    label="Identifiant"
                    prepend-inner-icon="person"
                    outline
                    color="#961F39"
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    :type="show_password ? 'text' : 'password'"
                    :append-icon="show_password ? 'visibility_off' : 'visibility'"
                    label="Mot de passe"
                    prepend-inner-icon="lock"
                    outline
                    color="#961F39"
                    @click:append="show_password = !show_password"
                  ></v-text-field>
                  <v-alert v-if="errorMessage" :value="true" type="error">{{errorMessage}}</v-alert>
                  <v-checkbox v-model="remember" label="Se souvenir de moi" color="#961F39"></v-checkbox>
                </v-flex>
                <div class="text-xs-center">
                  <v-btn round color="#961F39" dark @click="login">Se connecter</v-btn>
                </div>
              </form>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      nomUtilisateur: null,
      password: null,
      show_password: false,
      remember: false,
      errorMessage: null
    };
  },
  methods: {
    login() {
      let user = {
        nomUtilisateur: this.nomUtilisateur,
        password: this.password
      };
      /* eslint-disable */
      this.$store
        .dispatch("login", user)
        .then(() => this.$router.push({ name: "home" }))
        .catch(err => console.log(err));
    }
  }
};
</script>

<style>
</style>
