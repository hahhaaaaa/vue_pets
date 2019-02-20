import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login.vue'
import Register from './views/Register.vue'
Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path:'/register',
      name:"register",
      component:Register
      
    },
    {
      path:'/index',
      name:'index',
      component:()=>import('./views/index.vue'),
      children: [{
        path: '/service',
        name: 'service',
        component: () => import('./components/service/service.vue'),
      },{ path:'/pets',  component: () => import('./views/pets.vue'),}]
      
    },
   
  ]
})
