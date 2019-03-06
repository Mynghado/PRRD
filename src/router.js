import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'

import Login from './views/Login'
import ProjectList from './views/ProjectList'
import Home from './views/Home'
import AddProject from './views/AddProject'
import VueGantt from './views/VueGantt'
import NotFound from './views/NotFound'
import Team from './views/Team'
import About from './views/About'

Vue.use(Router)



let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/project_list',
        name: 'projectList',
        component: ProjectList,
        meta: { 
          requiresAuth: true
        }
    },
    {
      path: '/team',
      name: 'team',
      component: Team
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/add_project',
      name: 'addProject',
      component: AddProject,
      meta: { 
        requiresAuth: true
      }
    },
    {
      path: '/gantt/:projectId',
      name: 'gantt',
      component: VueGantt,
      props: true,
      meta: { 
        requiresAuth: true
      }
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login') 
  } else {
    next() 
  }
})

export default router;
