import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login.vue'
import Home from '@/components/home.vue'
import Zhengche from '@/components/zhengche.vue'
import Detail from '@/components/detail.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          name: 'zhengche',
          path: '/zhengche',
          component: Zhengche
        },
        {
          name: '/detail',
          path: '/detail',
          component: Detail
        }
      ]
    },
    { 
      name: 'login',
      path: '/login',
      component: Login
    }
  ]
})
