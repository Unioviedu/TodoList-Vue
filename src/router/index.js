import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Task from '../views/task'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/task',
    name: 'task',
    params: true,
    component: Task
  }
]

const router = new VueRouter({
  mode: 'history',
  // eslint-disable-next-line no-undef
  base: process.env.BASE_URL,
  routes
})

export default router
