<template>
  <div class="index">
     <topMenu></topMenu>
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
