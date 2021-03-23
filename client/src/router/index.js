import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import Details from '../views/Details.vue'
import fourofour from '../views/404.vue'
import Kassa from '../views/Kassa.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
    props: true
  },
  {
    path: '/kassa',
    name: 'Kassa',
    component: Kassa
  },
  {
    path: '/products/details/:id',
    name: 'Details',
    component: Details,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, {
    path: '*',
    name: '404',
    component: fourofour
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
