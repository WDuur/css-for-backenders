import { createRouter, createWebHistory } from 'vue-router'
import LayoutView from '../views/LayoutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LayoutView,
    },

    {
      path: '/layout',
      name: 'layout',
      component: () => import('../views/LayoutView.vue'),
    },
    {
      path: '/units',
      name: 'units',
      component: () => import('../views/UnitsView.vue'),
    },
  ],
})

export default router
