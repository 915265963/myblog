<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import "assets/style/reset.css";
html, body {
  height: 100%;
  font-family: 'Microsoft YaHei';
  position: relative;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: .2rem;
  background-color: #dedede;
}
/* 修改滾動條樣式 */
::-webkit-scrollbar {
  width: 6px;
  background-color: #181c32;
}

::-webkit-scrollbar-thumb {
  background-color: #5a76cd;
}
</style>
