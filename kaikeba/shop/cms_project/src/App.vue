<template>
  <div id="app">
    <mt-header fixed title="专属你的商城"></mt-header>
    <router-view/>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="index">
        <img slot="icon" src="">
        首页
      </mt-tab-item>
      <mt-tab-item id="vip">
        <img slot="icon" src="">
        会员
      </mt-tab-item>
      <mt-tab-item id="shopCar">
        <img slot="icon" src="">
        购物车
      </mt-tab-item>
      <mt-tab-item id="search">
        <img slot="icon" src="">
        查找
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import './common/style/common.css'
export default {
  name: 'App',
  data () {
    return {
      selected: ''
    }
  },
  watch: {
    selected: function (newVal, oldVal) {
      console.log(newVal, oldVal)
      this.$router.push({
        path: newVal
      })
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 40px;
  height: 100%;
}
</style>
