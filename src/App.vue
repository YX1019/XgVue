<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<topMenu></topMenu>-->
    <index></index>
    <router-view/>
  </div>
</template>

<script>
// import topMenu from '@/components/topMenu/topMenu'
import index from '@/components/index'
export default {
  name: 'App',
  components: {
    index
  }
}
</script>

<style>
  @import'./common/css/main.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
