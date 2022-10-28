import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/MyHome.vue')
  }
]
const router = createRouter({
  routes,
  history: createWebHashHistory()
})
export default router
