import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/busses',
    name: 'busses',
    component: () => import('../views/BussesView.vue'),
  },
  {
    path: '/drivers',
    name: 'drivers',
    component: () => import('../views/DriversView.vue'),
  },
  {
    path: '/assignments',
    name: 'assignments',
    component: () => import('../views/AssignmentsView.vue'),
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('../views/ContactsView.vue'),
  },
  {
    path: '/bus-editor/:id?',
    name: 'bus-editor',
    component: () => import('../views/BusEditor.vue'),
    props: true,
  },
  {
    path: '/driver-editor/:id?',
    name: 'driver-editor',
    component: () => import('../views/DriverEditor.vue'),
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
