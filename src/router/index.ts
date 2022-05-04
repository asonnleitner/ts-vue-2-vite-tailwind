import type { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'IndexPage',
    component: () => import('~/views/IndexPage.vue')
  }
]

export default new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes
})
