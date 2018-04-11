<template>
  <div class="xgMainCont">
  <div class="xg-header">
    <div class="xg-header-top">
      <div class="xg-container xg-gray">
        <i class="icon-z-caller left" style="font-size:26px;margin-top:7px;margin-right:5px;color:#666;"></i>客服热线：400-138-0656&nbsp;&nbsp;服务时间：9:00-21:00
        <div class="xg-header-top-right right font12">
          <a class="xg-blue" @click='toLogin()'>注册/登录</a>|
          <a>帮助中心</a>|
          <a>联系我们</a>
        </div>
      </div>
    </div>
    <div class="xg-header-bottom light-bg">
      <div class="xg-container">
        <img src="../../common/images/logo.png" style="margin-top:19px;"/>
        <ul class="xg-tab">
          <li v-for= "(list,index) in menuList" :key='list.name' :class="{'xg-orange': index === isActive}" @click='f1(index)' >{{list.name}}</li>
          <!--<router-link to='indexList'>-->
          <!--<li @click="goIndex()"><a class="xg-orange">首页</a></li>-->
          <!--</router-link>-->
          <!--<li><a>全部产品</a></li>-->
          <!--<router-link to='noviceWelfare'>-->
          <!--<li style="position:relative;"><a>新手福利</a>-->
            <!--<span class="xg-border-fill font12" style="position:absolute;top:-20px;right:-30px;border-radius: 15px 15px 15px 0;">698元红包</span>-->
          <!--</li>-->
          <!--</router-link>-->
          <!--<li><a>信息披露</a></li>-->
          <!--<li><a>安全保障</a></li>-->
          <!--<router-link to='myAcount'>-->
          <!--<li @click="goMyaccount()"><a>我的账户</a></li>-->
          <!--</router-link>-->
        </ul>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'topMenu',
  data () {
    return {
      isActive: 0,
      menuList: [{name: '首页'}, {name: '全部产品'}, {name: '新手福利'}, {name: '信息披露'}, {name: '安全保障'}, {name: '我的账户'}]
    }
  },
  methods: {
    f1: function (index) {
      this.isActive = index
      if (index === 0) {
        this.$router.push({ path: '/' })
      } else if (index === 5) {
        this.$router.push({ path: 'myAcount' })
      } else if (index === 2) {
        this.$router.push({ path: 'noviceWelfare' })
      }
      console.log(index)
    },
    toLogin: function () {
      this.$router.push({ path: 'login' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
