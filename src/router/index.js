import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // savedPosition is only available for popstate navigations.
      return savedPosition
    } else {
      const position = {}
  
      // scroll to anchor by returning the selector
      if (to.hash) {
        position.selector = to.hash
  
        // specify offset of the element
        if (to.hash === '#presentation') {
          position.offset = { y: 100 }
        }

        // specify offset of the element
        if (to.hash === '#realisation') {
          position.offset = { y: 100 }
        }

        // specify offset of the element
        if (to.hash === '#competences') {
          position.offset = { y: 100 }
        }

        // specify offset of the element
        if (to.hash === '#contact') {
          position.offset = { y: 100 }
        }
  
        // bypass #1number check
        if (document.querySelector(to.hash)) {
          return position
        }
  
        // if the returned position is falsy or an empty object,
        // will retain current scroll position.
        return false
      }
    }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/realisation',
      name: 'Realisation',
      component: () => import( '../views/Realisation.vue')
    },
    {
      path: '/competences',
      name: 'Competences',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( '../views/Competences.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( '../views/Contact.vue')
    },
  ]
})
/*const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/realisation',
    name: 'Realisation',
    component: () => import( '../views/Realisation.vue')
  },
  {
    path: '/competences',
    name: 'Competences',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/Competences.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/Contact.vue')
  },

]

const router = new VueRouter({
  
  routes
})

export default router*/
