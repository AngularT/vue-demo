<template>
  <div id="my-li">
    <li>
      <slot></slot>
    </li>
  </div>
</template>
<script>
export default {
  name: 'my-li',
  data () {
    return {
      msg: ''
    }
  }
}
</script>
<style>
  li {
    float: left;
    width: 33.3%;
    text-align: center;
    margin-bottom: 15px;
  }
</style>
