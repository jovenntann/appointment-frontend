import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Login from '../pages/Login.vue'

import Scheduler from '../pages/Scheduler.vue'
import Home from '../pages/Scheduler/Home.vue'
import Doctors from '../pages/Scheduler/Doctors.vue'
import Appointments from '../pages/Scheduler/Appointments.vue'

import Doctor from '../pages/Doctor.vue'
import DoctorHome from '../pages/Doctor/Home.vue'
import DoctorAppointments from '../pages/Doctor/Appointments.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  // Scheduler Routes
  {
    path: '/admin/',
    name: 'Home',
    component: Scheduler,
    meta: { requiresAuth: true },
    children: [
      {
        path: '/admin/',
        component: Home
      }
    ]
  },
  {
    path: '/admin/appointments',
    name: 'Appointments',
    component: Scheduler,
    meta: { requiresAuth: true },
    children: [
      {
        path: '/admin/appointments',
        name: 'Appointments',
        component: Appointments
      }
    ]
  },
  {
    path: '/admin/doctors',
    name: 'Doctors',
    component: Scheduler,
    meta: { requiresAuth: true },
    children: [
      {
        path: '/admin/doctors',
        name: 'Doctors',
        component: Doctors
      }
    ]
  },
  // Doctor Routes
  // Dashboard (Scheduler Authenticated)
  {
    path: '/',
    name: 'DoctorHome',
    component: Doctor,
    meta: { requiresAuth: true },
    children: [
      {
        path: '/',
        component: DoctorHome
      }
    ]
  },
  {
    path: '/appointments',
    name: 'DoctorAppointments',
    component: Doctor,
    meta: { requiresAuth: true },
    children: [
      {
        path: '/appointments',
        name: 'DoctorAppointments',
        component: DoctorAppointments
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
