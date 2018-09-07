import Vue from 'vue';
import Router from 'vue-router';
import StarFate from '@/components/page/star-fate';
import MyFate from '@/components/page/my-fate';
import Choose from '@/components/page/choose';
import Result from '@/components/page/result';
import Error from '@/components/error';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'choose',
      component: Choose
    },
    {
      path: '/myFate',
      name: 'myFate',
      component: MyFate
    },
    {
      path: '/starFate',
      name: 'starFate',
      component: StarFate
    },
    {
      path: '/result',
      name: 'result',
      component: Result
    },
    {
      path: '*',
      component: Error
    }
  ]
});
