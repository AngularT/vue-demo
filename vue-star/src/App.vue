<template>
  <div id="app">
    <router-view/>
    <p>
      <router-link to="/">helloworld</router-link>
      <router-link to="/hi">|  hi</router-link>
      <router-link to="/hi/hi1">|  Hi页面1</router-link>
      <router-link to="/hi/hi2">|  Hi页面2</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
