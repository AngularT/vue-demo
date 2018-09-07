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
import { starList } from '../../base/handle.js';
export default {
  name: "starFate",
  data () {
    return {
      starList: starList
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
