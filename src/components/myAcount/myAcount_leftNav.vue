<template>
  <ul class="xg-user-menu">
    <!--<router-link :to="{name:'acount'}">-->
    <li @click="goAcount()" :class="{'xg-gradient-vertical': isActive }"><a>我的账户</a></li>
    <!--</router-link>-->
    <!--<router-link to='user'>-->
    <li @click="goUser()" :class="{'xg-gradient-vertical': !isActive }"><a>个人资料</a></li>
    <!--</router-link>-->
    <li :class="{'xg-gradient-vertical': !isActive }"><a>交易明细</a></li>
    <li :class="{'xg-gradient-vertical': !isActive }"><a>银行卡</a></li>
    <li :class="{'xg-gradient-vertical': !isActive }"><a>我的红包</a><span>2</span></li>
    <li :class="{'xg-gradient-vertical': !isActive }"><a>邀请有礼</a></li>
    <li :class="{'xg-gradient-vertical': !isActive }"><a>消息管理</a></li>
  </ul>
</template>
<script>
export default {
  name: 'myAcountLeft',
  data () {
    return {
      isActive: true
    }
  },
  methods: {
    goAcount () {
      this.$router.push({ path: 'myAcount' })
      this.isActive = !this.isActive
    },
    goUser () {
      this.$router.push({ path: 'user' })
    }
  }
}
</script>
<style>

</style>
