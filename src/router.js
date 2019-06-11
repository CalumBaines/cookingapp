import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/index.vue';
import Register from './views/register/index.vue';
import Login from './views/login/index.vue';
import Recipes from './views/recipes/index.vue';
import store from '@/store/store';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: Recipes,
      beforeEnter: (to, from, next) => {
        if(store.getters.isUserLoggedIn) {
          next();
        } else {
          next('login')
        }
      }
    },
  ],
});
