import Vue from 'vue'
import Router from 'vue-router'

import SignIn from './views/SignIn'
import ProjectList from './views/ProjectList'
import Home from './views/Home'
import AddProject from './views/AddProject'
import VueGantt from './views/VueGantt'
import NotFound from './views/NotFound'
import Team from './views/Team'
import About from './views/About'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
        path: '/sign',
        name: 'SignIn',
        component: SignIn
    },
    {
        path: '/project_list',
        name: 'ProjectList',
        component: ProjectList
    },
    {
      path: '/team',
      name: 'Team',
      component: Team
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/add_project',
      name: 'AddProject',
      component: AddProject
    },
    {
      path: '/gantt',
      name: 'VueGantt',
      component: VueGantt
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
]
})
