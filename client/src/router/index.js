import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import Details from '../views/Details.vue'
import fourofour from '../views/404.vue'
import Kassa from '../views/Kassa.vue'
import Orders from '../views/Orders.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Admin from '../views/Admin.vue'
import Restricted from '../views/Admin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
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
    component: Kassa,
    meta: { authorize: [] }
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders,
    meta: { authorize: [] }
  },
  {
    path: '/products/details/:id',
    name: 'Details',
    component: Details,
    props: true
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: { authorize: ['admin'] }
  },
  {
    path: '/restricted',
    name: 'Restricted',
    component: Restricted,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, 
  {
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

router.beforeEach((to, from, next) => {
  // console.log(to.meta);
  // const { authorize, admin } = to.meta
  // console.log(authorize);
  // console.log(admin);
  // // const { admin } = to.meta
  // const token = sessionStorage.getItem('token')
  // const adminToken = sessionStorage.getItem('adminToken')
  // // const email = sessionStorage.getItem('storedEmail')

  // if(authorize && admin) {
  //   console.log('admin');
  //   if(!adminToken) {
  //     next({path: '/restricted', query: { redirect: to.fullPath }})
  //   } else {
  //     console.log('inloggad admin');
  //     next()
  //   }
    
    
  // }
  // else if(authorize) {
  //   console.log('restricted');
  //   if(!token) {
  //     next({path: '/login', query: { redirect: to.fullPath }})
  //   } else {
  //     console.log('inloggad');
  //       next()
  //   }
  // }

  // console.log('open');
  // next()

  const { authorize } = to.meta
  const token = sessionStorage.getItem('token')
  const adminToken = sessionStorage.getItem('adminToken')

  if(authorize) {

    if(authorize.includes('admin') && !adminToken) {
      return next({path: '/login', query: { redirect: to.fullPath }})
    }
    else if(!token) {
      return next({path: '/login', query: { redirect: to.fullPath }})
    }

  }
  next()
});


export default router
