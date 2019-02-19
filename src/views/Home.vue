<template>
  <v-container>
    <v-carousel>
      <v-carousel-item
        src="https://i0.wp.com/www.stjust34.com/wp-content/uploads/2016/07/bibliotheque.jpg?fit=1030%2C687"
      ></v-carousel-item>
      <v-carousel-item
        src="https://i0.wp.com/www.stjust34.com/wp-content/uploads/2016/07/bibliotheque.jpg?fit=1030%2C687"
      ></v-carousel-item>
    </v-carousel>
    <v-layout align-start justify-center row>
      <h1>Bienvenue</h1>
    </v-layout>
    <v-layout row>
      
      <v-flex xs4 ma-5>
        <v-card>
          <v-img
            src="https://i0.wp.com/www.stjust34.com/wp-content/uploads/2016/07/bibliotheque.jpg?fit=1030%2C687"
          ></v-img>
        </v-card>
      </v-flex>
      <v-flex xs4 ma-5>
        <v-card>
          <v-img
            src="https://i0.wp.com/www.stjust34.com/wp-content/uploads/2016/07/bibliotheque.jpg?fit=1030%2C687"
          ></v-img>
        </v-card>
      </v-flex>
      <v-flex xs4 ma-5>
        <v-card>
          <v-img
            src="https://i0.wp.com/www.stjust34.com/wp-content/uploads/2016/07/bibliotheque.jpg?fit=1030%2C687"
          ></v-img>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos."
    };
  }
};
</script>

<style>
</style>
