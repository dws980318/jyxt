import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      meta: {
      },
      component: () => import(/* webpackChunkName: "navigator" */ '@/views/Login')
    },
    {
      path: '/refresh',
      name: 'Refresh',
      meta: {
      },
      component: () => import(/* webpackChunkName: "navigator" */ '@/views/admin/Refresh')
    },
    {
      path: '/error',
      name: 'error',
      meta: {
      },
      component: () => import(/* webpackChunkName: "navigator" */ '@/views/error')
    }
  ]
})
