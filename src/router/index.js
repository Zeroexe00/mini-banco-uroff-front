import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import('../views/Registro')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')
  },
  {
    path: '/depositar',
    name: 'Depositar',
    component: () => import('../views/Depositar')
  },
  {
    path: '/retirar',
    name: 'Retirar',
    component: () => import('../views/Retirar')
  },
  {
    path: '/transferir',
    name: 'Transferencia',
    component: () => import('../views/Transferencia')
  },
]

const router = new VueRouter({
  routes
})

export default router
