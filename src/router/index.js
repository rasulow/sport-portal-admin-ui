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
  },
  {
    path: '/base-category',
    name: 'base-category',
    component: () => import('@/views/pages/Category/BaseCategory/BaseCategory.vue')
  },
  {
    path: '/sport-category',
    name: 'sport-category',
    component: () => import('@/views/pages/Category/SportCategory/SportCategory.vue')
  },
  {
    path: '/federation',
    name: 'federation',
    component: () => import('@/views/pages/Federation/FederationPage.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
