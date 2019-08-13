import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Login from '@/pages/login'
import Register from '@/pages/register'
import HelpCenter from '@/pages/helpCenter'
import ProductCenter from '@/pages/productCenter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/helpCenter',
      name: 'helpCenter',
      component: HelpCenter
    },
    {
      path: '/productCenter',
      name: 'productCenter',
      component: ProductCenter
    }
  ]
})
