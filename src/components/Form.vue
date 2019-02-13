<template>
    <div id="form">
        <div class="form container">
            <h5>Formulaire de suivi de projet</h5>
            <form @submit.prevent="submit">
                <div class="card">
                    <div class="card-content">
                        <div class="row">
                            <div class="">Project</div>
                            <div class="divider black "></div>
                            <div class="input-field ">
                                <input v-model="project_name" id="project_name" type="text" class="validate">
                                <label for="project_name" class="deep-purple-text">Nom du projet</label>
                            </div>
                            <div class="input-field ">
                                <input v-model="project_manager" id="project_manager" type="text" class="validate">  
                                <label for="project_manager">Chef de projet</label>
                            </div>
                            <div class="input-field ">
                                <input v-model="project_director" id="project_director" type="text" class="ùa">
                                <label for="project_director">Directeur de projet</label>
                            </div>
                            <div class="input-field ">
                                <input v-model="project_team" id="project_team" type="text" class="validate">
                                <label for="project_team">Équipe de projet</label>
                            </div>
                            <div class="input-field ">
                                <textarea v-model="description" id="description" type="text" class="materialize-textarea" ></textarea>
                                <label for="description">Description</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <div class="row">
                            <div class="">Calendrier</div>
                            <div class="divider black "></div>
                            <div class="input-field">
                                <input v-model="marker" id="marker" type="text" class="datepicker">
                                <label for="marker">Jalons</label>
                            </div>
                            <div class="input-field">
                                <input v-model="deliverable" id="deliverable" type="text" class="datepicker">  
                                <label for="deliverable">Livrables</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <div class="row">
                            <div class="">Moyens nécessaires</div>
                            <div class="divider black "></div>
                            <div class="input-field ">
                                <input v-model="human_resources" id="human_resources" type="text" class="validate">
                                <label for="human_resources">Humains (hormis l'équipe)</label>
                            </div>
                            <div class="input-field ">
                                <input v-model="material_resources" id="material_resources" type="text" class="validate">  
                                <label for="material_resources">Matériels</label>
                            </div>
                            <div class="input-field ">
                                <input v-model="it_resources" id="it_resources" type="text" class="validate">
                                <label for="it_resources">Informatiques</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <div class="row">
                            <div class="">Autres</div>
                            <div class="divider black "></div>
                            <div class="input-field ">
                                <input id="envisaged_financial_budget" type="text" class="validate">
                                <label for="envisaged_financial_budget">Budgets et financements envisagés</label>
                            </div>
                            <div class="input-field ">
                                <input id="partners" type="text" class="validate">  
                                <label for="partners">Partenaires</label>
                            </div>
                        </div>
                    </div>
                </div>
                 <!--<div>
                    <p><pre>data: {{$data | json 2}}</pre></p>
                </div>-->
                <div class="right">
                    <input type="submit" value="Annuler" class="btn white black-text">                
                    <input type="submit" value="Enregistrer" class="btn grey">
                </div>
            </form>      
        </div>
    </div>
  
</template>

<script>
export default {
    name: 'Form',
    data() {
        return {
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
            console.log(this.project_name)
        }
    },

    mounted () {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.datepicker');
            var instances = M.Datepicker.init(elems, {
                format: "dd-mm-yyyy",
                selectMonths: true,
                selectYears: true,
                showClearBtn: true, 
                i18n: {

                }
            });
        });
    }
}
</script>

<style>


.btn {

}

</style>
