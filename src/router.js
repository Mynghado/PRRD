import Vue from 'vue'
import Router from 'vue-router'

import SignIn from './views/SignIn'
import Form from './views/Form'
import Planning from './views/Planning'
import Gantt from './views/Gantt'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'SignIn',
      component: SignIn
    },
    {
        path: '/signin',
        name: 'SignIn',
        component: SignIn
    },
    {
        path: '/form',
        name: 'Form',
        component: Form
    },
    {
        path: '/planning',
        name: 'Planning',
        component: Planning
    },
    {
      path: '/gantt',
      name: 'Gantt',
      component: Gantt
    }
  ]
})
