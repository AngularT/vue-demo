import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/page/pos'
import Error from '@/components/error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Pos',
      component: Pos
    },
    {
      path: '*',
      component: Error
    }
  ]
})
