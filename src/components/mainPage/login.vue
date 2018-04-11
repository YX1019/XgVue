<template>
  <div class="">
    <div class="login">
      <img src="../../common/images/loginBg.jpg" class="loginBg"/>
      <div class="loginBox">
        <ul>
          <li class="reLi active">注册</li>
          <li class="loLi">登录</li>
        </ul>
        <div class="registerCont" style="display:none;">
          <div class="loginItem">
            <input type="text" placeholder="请输入手机号码" class="inputItem" />
          </div>
          <div class="loginItem">
            <input type="text" placeholder="请输入图中字符" class="codeInput" id="ImgCode" /><img src="../../common/images/codeImg.jpg" class="imgCode" id="reloadImage" onclick="changeImg()" /></div>
          <div class="loginItem">
            <input type="text" placeholder="请输入手机验证码" class="codeInput" id="code" />
            <input type="button" value="获取验证码" class="codebtn" onclick="smsSend(this)" />
          </div>
          <div class="loginItem">
            <input type="password" placeholder="密码由6-16位数字和字母组成" class="inputItem" />
          </div>
          <div class="loginItem">
            <input type="text" placeholder="请输入推荐人手机号(可选填)" class="inputItem" />
          </div>
          <p class="tip"><i></i> 我已阅读并同意<a href="http://app.xingelc.com/protocol/agreement/register.html" target="_blank">《注册协议》</a></p>
          <p class="regBtn" onclick="getRegister();">立即领取698元红包</p>
        </div>
        <div class="loginCont" >
          <h2>欢迎登录鑫格理财</h2>
          <div class="loginItem">
            <input type="text" placeholder="请输入手机号码" class="inputItem" />
          </div>
          <div class="loginItem">
            <input type="password" placeholder="请输入密码" class="inputItem" />
          </div>
          <div class="loginItem">
            <input type="text" placeholder="请输入图中字符" class="codeInput" id="ImgCode" /><img src="images/codeImg.jpg" class="imgCode" id="reloadImage" onclick="changeImg()" /></div>
          <p class="tip tip1"><i></i> 记住用户名<a class="forgotPwd" href="getPwd.html">忘记密码?</a></p>
          <p class="regBtn" @click="login()">立即登录</p>
        </div>
      </div>
    </div>
    <div class="bottom bottom1">
      <p>合肥鑫格信息科技服务有限公司 | 网贷有风险，理财需谨慎</p>
      <p><img src="../../common/images/bottomIcon.png" />备案：皖ICP备17006632号 | 增值电信业务经营许可证编号： 皖B2-20170088 </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    login () {
      let options = {
        url: '/api/login',
        method: 'post'
      }
      this.axios(options).then(res => {
        let data = res.data
        console.log(data, res)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
