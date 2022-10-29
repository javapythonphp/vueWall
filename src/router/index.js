import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/MyHome.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/MyTest.vue')
  }
]
const router = createRouter({
  routes,
  history: createWebHashHistory()
})
export default router
