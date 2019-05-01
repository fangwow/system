import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login.vue'
import Home from '@/components/home.vue'
import Zhengche from '@/components/zhengche/zhengche.vue'
import Detail from '@/components/zhengche/detail.vue'
import OrderPage from '@/components/zhengche/orderPage.vue'
import Lingdan from '@/components/lingdan/lingdan.vue'
import LingdanOrder from '@/components/lingdan/lingdanOrder.vue'
import ShopDetail from '@/components/lingdan/shopDetail.vue'
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
          name: 'detail',
          path: '/detail',
          component: Detail
        },
        {
          name: 'orderPage',
          path: '/orderPage',
          component: OrderPage
        },
        {
          name: 'lingdan',
          path: '/lingdan',
          component: Lingdan
        },
        {
          name: 'lingdanOrder',
          path: '/lingdanOrder',
          component: LingdanOrder
        },
        {
          name: 'shopDetail',
          path: '/shopDetail',
          component: ShopDetail
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
