<template>
  <div class="index">
     <topMenu></topMenu>
     <router-view></router-view>
     <foot></foot>
     <div @click='init'>点击</div>
  </div>
</template>

<script>
// import axios from "axios";
import topMenu from './topMenu/topMenu'
import foot from './foot/foot'
import $ from 'jquery'
// import vNoviceWelfare from './mainPage/noviceWelfare'
export default {
  name: 'index',
  data () {
    return {}
  },
  methods: {
    init () {
      console.log($('.index'))
    }
  },
  components: {
    topMenu, foot
  }
}
</script>

<style >

</style>
