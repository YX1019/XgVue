<template>
  <ul class="xg-user-menu">
    <li :class="{'xg-gradient-vertical': index === isActive }" v-for="(item,index) in leftMenuList " :key="item.name" @click="toPerson(index)"><a>{{item.name}}</a><span v-show="index === 4">2</span></li>
    <!--<router-link :to="{name:'acount'}">-->
    <!--<li @click="goAcount()" :class="{'xg-gradient-vertical': isActive }"><a>我的账户</a></li>-->
    <!--</router-link>-->
    <!--<router-link to='user'>-->
    <!--<li @click="goUser()" :class="{'xg-gradient-vertical': !isActive }"><a>个人资料</a></li>-->
    <!--</router-link>-->
    <!--<li :class="{'xg-gradient-vertical': !isActive }"><a>交易明细</a></li>-->
    <!--<li :class="{'xg-gradient-vertical': !isActive }"><a>银行卡</a></li>-->
    <!--<li :class="{'xg-gradient-vertical': !isActive }"><a>我的红包</a><span>2</span></li>-->
    <!--<li :class="{'xg-gradient-vertical': !isActive }"><a>邀请有礼</a></li>-->
    <!--<li :class="{'xg-gradient-vertical': !isActive }"><a>消息管理</a></li>-->
  </ul>
</template>
<script>
export default {
  name: 'myAcountLeft',
  data () {
    return {
      isActive: 0,
      leftMenuList: [{name: '我的账户'}, {name: '个人资料'}, {name: '交易明细'}, {name: '银行卡'}, {name: '我的红包'}, {name: '邀请有礼'}, {name: '消息管理'}]
    }
  },
  methods: {
    toPerson (index) {
      this.isActive = index
      if (index === 0) {
        this.$router.push({ path: 'myAcount' })
      } else if (index === 1) {
        this.$router.push({ path: 'user' })
      } else if (index === 2) {
        this.$router.push({ path: 'transdetail' })
      } else if (index === 3) {
        this.$router.push({ path: 'bankCard' })
      } else if (index === 4) {
        this.$router.push({ path: 'redPack' })
      } else if (index === 5) {
        this.$router.push({ path: 'invitation' })
      } else if (index === 6) {
        this.$router.push({ path: 'message' })
      }
    },
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
