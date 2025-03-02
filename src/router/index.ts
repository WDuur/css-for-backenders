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
      path: '/box-model',
      name: 'home',
      component: LayoutView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/LayoutView.vue'),
    },
  ],
})

export default router
