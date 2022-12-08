import { createRouter, createWebHistory } from 'vue-router'

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    { path: '/', name: 'Home', component: () => import('@/pages/Index.vue'), meta: { title: 'Vite Ultra' } },
    { path: '/about', name: 'About', component: () => import('@/pages/About.vue'), meta: { title: 'About | Vite Ultra' } },
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

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  next()
})
export default router
