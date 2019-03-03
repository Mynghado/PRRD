<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm10 offset-sm1>
        <v-card>
          <v-card-title>
            <h1>Formulaire de suivi de projet</h1>
          </v-card-title>
          <v-card-text>
            <v-form ref="form">
              <h2>Projet</h2>
              <v-divider/>
              <v-text-field
                v-model="project_name"
                :rules="inputRules"
                label="Nom du projet"
                prepend-icon="create"
              ></v-text-field>
              <v-text-field
                v-model="project_manager"
                :rules="inputRules"
                label="Chef de projet"
                prepend-icon="person"
              ></v-text-field>
              <v-text-field
                v-model="project_director"
                :rules="inputRules"
                label="Directeur de projet"
                prepend-icon="person"
              ></v-text-field>
              <v-text-field
                v-model="project_team"
                :rules="inputRules"
                label="Équipe de projet"
                prepend-icon="people"
              ></v-text-field>
              <v-textarea
                v-model="description"
                :rules="inputRules"
                label="Description"
                prepend-icon="description"
                rows="2"
              ></v-textarea>

              <h2>Calendrier</h2>
              <v-divider/>
                <v-menu ref="menu"
                  v-model="menu"
                  :close-on-content-click="false" lazy :nudge-right="40"
                  transition="scale-transition" offset-y full-width min-width="290px"
                  :return-value.sync="marker">
                  <v-combobox
                    v-model="marker" :rules="dateRules"
                    slot="activator"
                    label="Jalons"
                    prepend-icon="event" multiple chips small-chips
                    readonly
                  ></v-combobox>  
                  <v-date-picker v-model="marker" locale="fr"
                    no-title multiple scrollable>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="menu = false">Annuler</v-btn>
                    <v-btn flat color="primary" @click="$refs.menu.save(marker)">OK</v-btn>
                  </v-date-picker>
                </v-menu>
                <v-text-field v-model="deliverable" :rules="inputRules" label="Livrables" prepend-icon="note_add"></v-text-field>

              <h2>Moyens nécessaires</h2>
              <v-divider/>
              <v-text-field
                v-model="human_resources"
                :rules="inputRules"
                label="Humains (hormis l'équipe)"
                prepend-icon="person"
              ></v-text-field>
              <v-text-field
                v-model="material_resources"
                :rules="inputRules"
                label="Matériels"
                prepend-icon="build"
              ></v-text-field>
              <v-text-field
                v-model="it_resources"
                :rules="inputRules"
                label="Informatiques"
                prepend-icon="laptop"
              ></v-text-field>

              <h2>Autres</h2>
              <v-divider/>
              <v-text-field
                v-model="planned_budget"
                :rules="inputRules"
                label="Budgets et financements envisagés"
                prepend-icon="euro_symbol"
              ></v-text-field>
              <v-text-field
                v-model="partners"
                :rules="inputRules"
                label="Partenaires"
                prepend-icon="people_outline"
              ></v-text-field>

              <v-layout align-center justify-end row>
                <v-btn outline @click="cancel">Annuler</v-btn>
                <v-btn depressed color="grey white--text" @click="submit">Ajouter</v-btn>
              </v-layout>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
//import serviceProject from "../services/project";

export default {
  /* eslint-disable */
  name: "Form",
  data() {
    return {
      inputRules: [
        v => !! v || "Ce champ est obligatoire",
        v => v.length >= 3 || "La longueur minimale de ce champ est de 3 caractères"
      ],
      dateRules: [v => v.length >= 1 || "Ce champ est obligatoire"],

      project_name: "",
      project_manager: "",
      project_director: "",
      project_team: "",
      description: "",

      menu: false,
      marker: [],
      deliverable: "",

      human_resources: "",
      material_resources: "",
      it_resources: "",

      planned_budget: "",
      partners: "",

      project: {
        project_name: "", project_manager: "", project_director: "", project_team: "", description: "",
        marker: "", deliverable: "", 
        human_resources: "", material_resources: "", it_resources: "", 
        planned_budget: "", partners: "",
      }
    };
  },
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        this.project.project_name = this.project_name
        this.project.project_manager = this.project_manager,
        this.project.project_director = this.project_director,
        this.project.project_team = this.project_team,
        this.project.description = this.description,

        this.project.marker = this.marker[0],
        this.project.deliverable = this.deliverable,

        this.project.human_resources = this.human_resources,
        this.project.material_resources = this.material_resources,
        this.project.it_resources = this.it_resources,

        this.project.planned_budget = this.planned_budget,
        this.project.partners = this.partners,

        console.log(this.project);
        console.log(this.project_name);
        console.log(this.project_manager);
        console.log(this.project_director);
        console.log(this.project_team);
        console.log(this.description);
        console.log(this.marker[0]);
        console.log(this.deliverable);
        console.log(this.human_resources);
        console.log(this.material_resources);
        console.log(this.it_resources);
        console.log(this.planned_budget);
        console.log(this.partners);

        /*try {
          await serviceProject.createProjet(this.testToCreate);
        } catch (err) {}*/

      }
    },

    cancel() {
      this.$router.push({ name: "home" });
    }
  },

  mounted() {

  }
};
</script>

<style>
</style>
