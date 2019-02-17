<template>
<div id="NavBar">
    <nav>
        <v-toolbar flat app>
            <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>
                <v-flex xs12>
                    <span class="px-0">Bibliothèque</span>
                    <span>Sainte-Geneviève</span>
                </v-flex>
            </v-toolbar-title>
            <v-spacer/>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat>
                    <span>Accueil</span>
                </v-btn>
                <v-btn flat>
                    <span>Suivi de projets</span>
                </v-btn>
                <v-btn flat>
                    <span>Équipe</span>
                </v-btn>
                <v-btn flat>
                    <span>À propos</span>
                </v-btn>
                <v-btn flat>
                    <span>Compte</span>
                </v-btn>
                <v-btn flat>
                    <span>Aide</span>
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>

        <v-navigation-drawer app temporary v-model="drawer" class="grey"> <!-- makes the burger works -->
            <v-list>
                <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-tile-action>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
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
            links: [
                {
                    icon: 'home',
                    text: 'Accueil',
                    route: '/'
                },
                {
                    icon: 'date_range',
                    text: 'Suivi de projets',
                    route: '/form'
                },
                {
                    icon: 'group',
                    text: 'Équipe',
                    route: '/'
                },
                {
                    icon: 'forum',
                    text: 'À propos',
                    route: '/'
                },
                {
                    icon: 'account_circle',
                    text: 'Compte',
                    route: '/'
                },
                {
                    icon: 'help',
                    text: 'Aide',
                    route: '/'
                }
            ]
        }
    },
    mounted () {

    }
}
</script>

<style>

</style>
