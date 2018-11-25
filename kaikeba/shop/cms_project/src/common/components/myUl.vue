<template>
  <div id="my-ul">
    <ul>
      <slot></slot>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'my-ul',
  data () {
    return {
      msg: ''
    }
  }
}
</script>
<style>

</style>
