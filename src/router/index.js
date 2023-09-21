import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/pages/Login/LoginPage.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/pages/Dashboard/DashboardPage.vue')
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('@/views/pages/Users/UsersPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
