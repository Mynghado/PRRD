<template>
    <div id="form">
        <v-container>
        <v-layout row>
        <v-flex xs12 sm10 offset-sm1 >
        <v-card>
            <v-card-title>
                <h1>Formulaire de suivi de projet</h1>
            </v-card-title>
            <v-card-text>
                <v-form>
                    <h2>Projet</h2>
                    <v-divider/>
                    <v-text-field v-model="project_name" label="Nom du projet" prepend-icon="create"></v-text-field>
                    <v-text-field v-model="project_manager" label="Chef de projet" prepend-icon="person"></v-text-field>
                    <v-text-field v-model="project_director" label="Directeur de projet" prepend-icon="person"></v-text-field>
                    <v-text-field v-model="project_team" label="Équipe de projet" prepend-icon="people"></v-text-field>
                    <v-textarea v-model="description" label="Description" prepend-icon="description" rows="2"></v-textarea>

                    <h2>Calendrier</h2>
                    <v-divider/>
                    <v-menu>
                        <v-text-field :value="marker" slot="activator" label="Jalons" prepend-icon="date_range"></v-text-field>
                        <v-date-picker v-model="marker"></v-date-picker>
                        <v-icon>add</v-icon>
                    </v-menu>
                    <v-text-field v-model="deliverable" label="Livrables" prepend-icon="note_add"></v-text-field>

                    <h2>Moyens nécessaires</h2>
                    <v-divider/>
                    <v-text-field v-model="human_resources" label="Humains (hormis l'équipe)" prepend-icon="person"></v-text-field>
                    <v-text-field v-model="material_resources" label="Matériels" prepend-icon="build"></v-text-field>
                    <v-text-field v-model="it_resources" label="Informatiques" prepend-icon="laptop"></v-text-field>

                    <h2>Autres</h2>
                    <v-divider/>
                    <v-text-field v-model="envisaged_financial_budget" label="Budgets et financements envisagés" prepend-icon="euro_symbol"></v-text-field>
                    <v-text-field v-model="partners" label="Partenaires" prepend-icon="people_outline"></v-text-field>
                    
                    <v-layout align-center justify-end row>
                        <v-btn outline>Annuler</v-btn>
                        <v-btn depressed color="grey white--text">Ajouter</v-btn>
                    </v-layout>
                </v-form>
            </v-card-text>
        </v-card>
        </v-flex>
        </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'Form',
    data() {
        return {
            valid: true,

            project_name: null,
            project_manager: null,
            project_director: null,
            project_team: null,
            description: null,

            marker: null,
            deliverable: null,

            human_resources: null,
            material_resources: null,
            it_resources: null
        }
    },
    methods: {
        submit () {
            //console.log(this.project_name)
        }
    },

    mounted () {
        /*document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.datepicker');
            var instances = M.Datepicker.init(elems, {
                format: "dd-mm-yyyy",
                selectMonths: true,
                selectYears: true,
                showClearBtn: true, 
                i18n: {

                }
            });
        });*/
    }
}
</script>

<style>

</style>
