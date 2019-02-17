<template>
    <v-app class="grey lighten-4">
        <NavBar />
        <v-content>
          <router-view/>
        </v-content>
  </v-app>
</template>

<script>
import NavBar from './views/NavBar.vue'
import Footer from './views/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  },
  data () {
    return {
      //
    }
  }
}
</script>
