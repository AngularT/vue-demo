// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 公共ui组件
import MintUI from 'mint-ui'
import MyUl from './common/components/myUl'
import MyLi from './common/components/myLi'

import 'mint-ui/lib/style.css'

import Axios from 'axios'

// 配置公共的 URL
Axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5bf96ad9cc4bfa61f5fcd00a/example/'
// 挂载属性，让全局的 $axios 都能用
Vue.prototype.$axios = Axios
Vue.config.productionTip = false
// 安装插件
Vue.use(MintUI)

// 注册全局组件
Vue.component(MyUl.name, MyUl)
Vue.component(MyLi.name, MyLi)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
