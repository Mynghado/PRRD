<template>
  <v-container>
    <!--<v-layout align-start justify-center row>
      <h1>Bienvenue</h1>
    </v-layout>-->
        <v-layout row wrap>
      <v-flex tag="h1" class="headline">Site actuellement en construction</v-flex>
      <v-flex d-flex xs12 order-xs5>
        <v-layout column>
          <v-flex>
            <v-card flat>
              <v-card-text>{{ lorem }}</v-card-text>
            </v-card>
          </v-flex>
          <v-flex>
            <v-card flat>
              <v-card-text>{{ lorem }}</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    name: 'Home',
    data () {
        return {
            lorem: 'Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.'
        }
    }
}
</script>

<style>

</style>
