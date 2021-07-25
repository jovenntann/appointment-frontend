import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Login from '../pages/Login.vue'

import Main from '../pages/Main.vue'
import Home from '../pages/Dashboard/Home.vue'
import Doctors from '../pages/Dashboard/Doctors.vue'
import Appointments from '../pages/Dashboard/Appointments.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  // Dashboard (Authenticated)
  {
    path: '/',
    name: 'Home',
    component: Main,
    meta: { requiresAuth: true },
    children: [
      {
        path: '/',
        component: Home
      }
    ]
  },
  {
    path: '/appointments',
    name: 'Appointments',
    component: Main,
    meta: { requiresAuth: true },
    children: [
      {
        path: '/appointments',
        name: 'Appointments',
        component: Appointments
      }
    ]
  },
  {
    path: '/doctors',
    name: 'Doctors',
    component: Main,
    meta: { requiresAuth: true },
    children: [
      {
        path: '/doctors',
        name: 'Doctors',
        component: Doctors
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next) => {
  if (to.meta.requiresAuth ) {
    const AccessToken = localStorage.getItem("AccessToken");
    if (AccessToken) {
      next()
    } else {
      next('/login')
    }
  } else {
    next();
  }
});

export default router
