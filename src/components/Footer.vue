<template>
  <v-footer height="auto" color="black lighten-3">
    <v-layout justify-center row wrap>
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        flat
        round>{{ link }}
      </v-btn>
      <v-flex
        class="text-uppercase"
        color="black"
        lighten-2
        py-3
        text-xs-center
        white--text
        xs12>
        &copy;2019 — <strong>Bibliothèque Sainte Geneviève</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            links: [
                'Mentions légales',
                'Plan du site',
                'Nous contacter',
                'Support',
                'À propos'
            ]
        }
    }
}
</script>

<style>

</style>
