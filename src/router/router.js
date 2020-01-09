import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
const index = () => import( '../page/indexPage/index.vue' );
const home  = () => import( '../page/homePage/home.vue' );


const childrenRouter = {};
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path:'/home',
      name: 'home',
      component: home,
      // children: childrenRouter
    }
  ]
});

export default router;