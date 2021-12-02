import Vue from 'vue';
import VueRouter from 'vue-router';
import index from './view';
import back from './view/back';
import notFount from './view/404';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: index
  },
  {
    path: '/back',
    name: 'back',
    component: back
  },
  {
    path: '*',
    component: notFount
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
