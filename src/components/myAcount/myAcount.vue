<template>
  <div class="">
    <div class="line"></div>
    <div class="xg-container xg-gray-more">
      <myAcountNav></myAcountNav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import myAcountNav from './myAcount_leftNav.vue'
import acount from './acount.vue'
export default {
  name: 'noviceWelfare',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    myAcountNav,
    acount
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
