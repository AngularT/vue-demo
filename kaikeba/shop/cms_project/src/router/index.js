import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Vip from '@/components/vip'
import ShopCar from '@/components/shopCar'
import Search from '@/components/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/vip',
      name: 'vip',
      component: Vip
    },
    {
      path: '/shopCar',
      name: 'shopCar',
      component: ShopCar
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})
