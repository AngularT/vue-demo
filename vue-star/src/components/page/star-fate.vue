<template>
   <div class="star-fate">
    <div class="star-list">
      <ul>
        <li v-for="item in starList" class="btn">
          <router-link class="star-btn" :to="{name:'result',query:{starName:item.py} }">{{item.name}}座</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "starFate",
  data () {
    return {
      starList:[
        {
          py: 'baiyang',
          name: '白羊',
          bgImg: ''
        },
        {
          py: 'jinniu',
          name: '金牛',
          bgImg: ''
        },
        {
          py: 'shuangzi',
          name: '双子',
          bgImg: ''
        },
        {
          py: 'juxie',
          name: '巨蟹',
          bgImg: ''
        },
        {
          py: 'shizi',
          name: '狮子',
          bgImg: ''
        },
        {
          py: 'chunv',
          name: '处女',
          bgImg: ''
        },
        {
          py: 'tiancheng',
          name: '天秤',
          bgImg: ''
        },
        {
          py: 'tianxie',
          name: '天蝎',
          bgImg: ''
        },
        {
          py: 'sheshou',
          name: '射手',
          bgImg: ''
        },
        {
          py: 'mojie',
          name: '摩羯',
          bgImg: ''
        },
        {
          py: 'shuiping',
          name: '水瓶',
          bgImg: ''
        },
        {
          py: 'shuangyu',
          name: '双鱼',
          bgImg: ''
        },
      ]
    }
  },
  methods: {
   
  },
}
</script>

<style scoped>
/* scoped 样式私有 */
.btn {
  text-align: center;
  width: 50%;
  margin: 0 auto;
  margin-top: 15px;
  background-image: linear-gradient(top,#032f56 30%,#82162d);
  border: none;
  box-shadow: 0 0 15px 0 rgba(255, 255, 255, .5)
}
.star-btn {
  width: 100%;
  display: block;
}
</style>
