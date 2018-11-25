<template>
  <div id="index">
    <div class="swipe-wrapper">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item, index) in bannerList" :key="index">
          <img :src="item" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="menu-list">
      <my-ul>
        <my-li v-for="(item, index) in menuList" :key="index">
          <a href="">
            <img :src="item.img" alt="">
            <span>{{item.name}}</span>
          </a>
        </my-li>
      </my-ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'index',
  data () {
    return {
      msg: '',
      src: '',
      bannerList: [],
      menuList: []
    }
  },
  created: function () {
    this.$axios.get('/index-banner').then(res => {
      this.bannerList = res.data.data.imgList
      this.menuList = res.data.data.menuList
    })
  },
  components: {
  }
}
</script>
<style scoped>
  #index {
    height: 100%;
  }
  .swipe-wrapper {
    height: 150px;
  }
  .mint-swipe img {
    height: 100%;
    width: 100%;
  }
  .menu-list img {
    width: 100%;
    height: 70px;
  }
</style>
