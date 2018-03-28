<template>
  <div class="index">
     <topMenu></topMenu>
    <router-view></router-view>
    <foot></foot>
  </div>
</template>

<script>
// import axios from "axios";
import topMenu from './topMenu/topMenu'
import foot from './foot/foot'
export default {
  name: 'index',
  data () {
    return {}
  },
  components: {
    topMenu,
    foot
  }
}
</script>

<style >

</style>
