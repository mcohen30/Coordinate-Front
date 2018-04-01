import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './pages/Home.vue';
import Test from './pages/Test.vue';
import Create from './pages/Create.vue';

Vue.use(VueRouter);

let router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: Create
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/test',
      component: Test
    }
  ]
});

export default {
  getRouter: () => {
    return router;
  }
};
