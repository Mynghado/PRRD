import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import  Axios  from  'axios'
import store from './store'

Vue.config.productionTip = false;

Vue.prototype.$http  =  Axios;
const token = localStorage.getItem('token')

if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = `JWT ${token}`
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')