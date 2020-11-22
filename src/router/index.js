import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Home from '@/views/home';
import Login from '@/views/login';

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        guest: true
      }
    },
    { path: '/home', redirect: '/' },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      },
    },
  ]
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('token') == null || localStorage.getItem('token') === '') {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    } else {
      next()
    }
  } else if(to.matched.some(record => record.meta.guest)) {
    if(localStorage.getItem('token') == null || localStorage.getItem('token') === ''){
      next()
    }
    else{
      next({ name: 'home'})
    }
  }else {
    next()
  }
})

export default router