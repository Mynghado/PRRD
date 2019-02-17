<template>
<div id="SignIn">
  <v-container>
    <v-layout row>
        <!--<v-flex xs12 sm6 offset-sm3>-->
        <!--<v-flex xs12 sm6 offset-sm3 md6 offset-md3>-->
        <v-flex xs12 sm8 offset-sm2 md6 offset-md3 lg4 offset-lg4 >
            <v-card>
                <v-card-title>
                    <v-container class="text-xs-center">
                        <h2>Connexion</h2>
                    </v-container>
                </v-card-title>
                <v-card-text>
                    <form>
                        <v-flex xs12>
                            <v-text-field v-model="project_team" label="Identifiant" prepend-inner-icon="person" solo outline></v-text-field>
                            <v-text-field v-model="password" label="Mot de passe" prepend-inner-icon="lock" solo outline></v-text-field>
                        </v-flex>
                        <div class="text-xs-center">
                            <v-btn round color="primary" dark>Se connecter</v-btn>
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
    name: 'SignIn'
}
</script>

<style>

</style>
