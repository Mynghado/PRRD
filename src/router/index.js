import Vue from 'vue'
import Router from 'vue-router'

import SignIn from './../components/SignIn'
import Form from './../components/Form'
import Planning from './../components/Planning'

Vue.use(Router)

export default new Router({
  mode: 'history', // to remove the ugly '/#/' from the URL
  routes: [
    {
        path: '/signin',
        name: 'SignIn',
        component: SignIn
    },
    {
        path: '/',
        name: 'Form',
        component: Form
    },
    {
        path: '/planning',
        name: 'Planning',
        component: Planning
    }
  ]
})
