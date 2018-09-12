<template>
  <div class="choose">
    <div class="button-wrap">
      <button class="btn" @click="myFate">我的运势</button>
      <button class="btn" @click="starFate">星座运势</button>
    </div>
   
  </div>
</template>
<script>
import '../../assets/style/common.css'
export default {
  name:'choose',
  data () {
    return {
      msg: this.childMsg
    }
  },
  methods: {
    myFate () {
      this.$emit('parent','string');
      this.$router.push('/myFate')
    },
    starFate () {
      this.$router.push('/starFate')
    },
  },
}
</script>
<style scoped>
.choose {
  height: 100%;
  width: 100%;
  background: url(../../assets/image/bg.jpg);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn {
  margin-bottom: 20px;
  background-image: linear-gradient(top,#032f56 30%,#82162d);
  border: none;
  box-shadow: 0 0 15px 0 rgba(255, 255, 255, .5) 
}
.btn:focus,.btn:active,btn:hover{
  background-image: none;
  background-color: rgba(115, 56, 75, .56);
  border: none;
}
</style>
