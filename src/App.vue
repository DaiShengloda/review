<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='scss'>
@import './sass/_function.scss';
body {
  margin: 0;
  background: #efeff5;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  max-width: r(850);
  margin: 0 auto;
  overflow: hidden;
  min-height: 100vh;
  background: #efeff5;
}
</style>