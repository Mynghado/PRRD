<template>
<div id="SignIn">
    <v-container>
        <v-layout row>
            <v-flex xs12 sm8 offset-sm2 md6 offset-md3 lg4 offset-lg4 >
                <v-card>
                    <v-card-title>
                        <v-container class="text-xs-center">
                            <h1>Connexion</h1>
                        </v-container>
                    </v-card-title>
                    <v-card-text>
                        <form>
                            <v-flex xs12>
                                <v-text-field v-model="id" 
                                    label="Identifiant" prepend-inner-icon="person" 
                                    outline>
                                </v-text-field>
                                <v-text-field v-model="password" 
                                    :type="show_password ? 'text' : 'password'"
                                    :append-icon="show_password ? 'visibility_off' : 'visibility'"
                                    label="Mot de passe" prepend-inner-icon="lock" 
                                    outline
                                    @click:append="show_password = !show_password">
                                </v-text-field>
                                <v-checkbox
                                    v-model="remember"
                                    label="Se souvenir de moi"
                                ></v-checkbox>
                            </v-flex>
                            <div class="text-xs-center">
                                <v-btn round color="primary" dark @click="localStorage.setItem('ttt', true)">Se connecter</v-btn>
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
    name: 'SignIn',
    data () {
        return {
            id: null,
            password: null,
            show_password: false,
            remember: false
        }
    }
}
</script>

<style>

</style>
