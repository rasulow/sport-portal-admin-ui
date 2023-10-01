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
    component: () => import('@/views/pages/Federation/FederationPage.vue'),
  },
  {
    path: '/federation-sports',
    name: 'federation-sports',
    component: () => import('@/views/pages/Federation/Sport/SportPage.vue')
  },
  {
    path: '/federation-gyms-clubs',
    name: 'federation-gyms-clubs',
    component: () => import('@/views/pages/Federation/GymClub/GymClub.vue')
  },
  {
    path: '/federation-trainers',
    name: 'federation-trainers',
    component: () => import('@/views/pages/Federation/Trainer/TrainerPage.vue')
  },
  {
    path: '/federation-athletes',
    name: 'federation-athletes',
    component: () => import('@/views/pages/Federation/Athlete/AthletePage.vue')
  },
  {
    path: '/video',
    name: 'video',
    component: () => import('@/views/pages/News/Video/VideoPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
