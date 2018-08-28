<template>
  <div>{{msg}}
  <router-view ></router-view>
  </div>
</template>

<script>
// test
export default {
  name: 'Hi',
  data () {
    return {
      msg: 'hi,i am angularT!'
    }
  }
}
</script>
<style>

</style>


