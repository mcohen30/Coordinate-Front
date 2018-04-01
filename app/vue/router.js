import Vue from 'vue';
import VueRouter from 'vue-router';

import Create from './pages/Create.vue';
import App from './pages/App.vue';

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
      path: '/app',
      redirect: '/'
    },
    {
      path: '/app/:id',
      component: App
    }
  ]
});

export default {
  getRouter: () => {
    return router;
  }
};
