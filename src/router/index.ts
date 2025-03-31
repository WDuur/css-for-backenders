import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/startView.vue'),
    },
    {
      path: '/important',
      name: 'important',
      component: () => import('../views/ImportantView.vue'),
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
    {
      path: '/variables',
      name: 'variables',
      component: () => import('../views/VariablesView.vue'),
    },
    {
      path: '/preprocessors',
      name: 'preprocessors',
      component: () => import('../views/PreprocessorView.vue'),
    },
    {
      path: '/architectuur',
      name: 'architectuur',
      component: () => import('../views/ArchitectuurView.vue'),
    },
    {
      path: '/debugging',
      name: 'debugging',
      component: () => import('../views/DebuggingView.vue'),
    },
  ],
})

export default router
