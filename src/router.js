import { createRouter, createWebHistory } from 'vue-router'

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    { path: '/', name: 'Home', component: () => import('@/pages/Index.vue') },
    { path: '/about', name: 'About', component: () => import('@/pages/About.vue') },
    // more pages ...
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})
export default router
