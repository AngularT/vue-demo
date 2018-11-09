<template>
  <div class="my-fate">
    <div class="block">
      <el-date-picker
        v-model="value1"
        type="date"
        placeholder="选择日期">
      </el-date-picker>
    </div>
    <button class="btn" @click="getStar">查看我的星座运势</button>
    <p>{{value2}}</p>
  </div>
</template>
<script>
import { starList } from '../../base/handle.js';
export default {
  name: 'myFate',
  data () {
    return {
      value1: '',
      star: '',
      py: '',
      value3: 'asdfsadf'
    }
  },
  methods: {
    getStar () {
      if (!this.value1){
        alert('请输入生日');
        return;
      }
      console.log(this.value2)
      let d = new Date(this.value1);
      let month = d.getMonth() + 1;
      let day = d.getDate();
      this.star = this.getAstro(month,day);
      for (let i = 0; i < starList.length; i++){
        if (this.star === starList[i].name){
          this.py = starList[i].py;
        }
      }
      this.$router.push({ name: 'result', query: { starName: this.py }})
    },
    getAstro (month,day){
        const s="魔羯水瓶双鱼牡羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯";
        const arr=[20,19,21,21,21,22,23,23,23,23,22,22];
        return s.substr(month*2-(day<arr[month-1]?2:0),2);
    }
  },
  computed: {
    value2(){
      return this.value3.split('').reverse();
    }
  },
  watch: {
    value1(){
      this.value3 = 'aaaaaa'
    }
  }
}
</script>

<style scoped>
.btn {
  background-image: linear-gradient(top,#032f56 30%,#82162d);
  border: none;
  box-shadow: 0 0 15px 0 rgba(255, 255, 255, .5)
}
</style>
