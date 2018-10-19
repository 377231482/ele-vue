import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../pages/HomePage';
import StorePage from '../pages/StorePage.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path:'/store/:id',
      component:StorePage
    },

  ]
})


