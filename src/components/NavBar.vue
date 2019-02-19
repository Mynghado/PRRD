<template>
<div id="NavBar">
    <nav>
        <v-toolbar flat app color="grey lighten-2">
            <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>
                <v-flex xs12>
                    <span class="px-0">Bibliothèque Sainte-Geneviève</span>
                </v-flex>
            </v-toolbar-title>
            <v-spacer/>
            <v-toolbar-items v-for="link in links" :key="link.text" class="hidden-sm-and-down">
                <v-btn flat router :to="link.route">
                    <v-icon left>{{ link.icon }}</v-icon>
                    <span>{{ link.text }}</span>
                </v-btn>
                <v-divider inset vertical></v-divider>    
            </v-toolbar-items>
            <v-btn v-if="authenticated" @click="disconnect" dark depressed color="red darken-4" router :to="'/'">
                <span class="hidden-xs-only">Se déconnecter</span>
                <v-icon right>exit_to_app</v-icon>
                <v-spacer></v-spacer>
            </v-btn>
            <v-btn v-else-if="!authenticated" dark depressed color="green darken-4" router :to="'/sign'">
                <span class="hidden-xs-only">Se connecter</span>
                <v-icon right>power_settings_new</v-icon>
                <v-spacer></v-spacer>
            </v-btn>
        </v-toolbar>

        <v-navigation-drawer app temporary v-model="drawer" class="grey lighten-2"> <!-- makes the burger works -->
            <v-list>
                <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-tile-action>
                        <v-icon>{{ link.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ link.text }}</v-list-tile-title> <!-- class="white--text" -->
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </nav>
</div>
</template>

<script>
export default {
    name: 'NavBar',
    data () {
        return {
            drawer: false,
            authenticated: localStorage.getItem('connected'),
            links: [
                {
                    icon: 'home',
                    text: 'Accueil',
                    route: '/'
                },
                {
                    icon: 'list',
                    text: 'Liste des projets',
                    route: '/project_list'
                },
                {
                    icon: 'add',
                    text: 'Créer un projet',
                    route: '/add_project'
                }
            ]
        }
    },
    methods: {
        disconnect() {
            this.authenticated = false
            localStorage.setItem('connected', this.authenticated)
        }
    },
    updated () {
        localStorage.getItem('connected')
    }
}
</script>

<style>

</style>
