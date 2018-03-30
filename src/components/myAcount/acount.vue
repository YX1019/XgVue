<template>
  <div class="xg-user-content">
    <div id="account">
      <div class="light-bg">
        <div style="padding: 5px 20px;"><div class="xg-user-account-message">鑫格理财为您量身打造了风险承受能力评估体系，以获得最佳投资体验！<a class="xg-blue">立即评估</a></div></div>
        <div class="xg-gray-less font16" style="height:140px">
          <div class="left text-center" style="width:135px;border-right:1px solid #eee;">
            <div class="xg-head-img"><img style="width:100%;" src="../../common/images/user-default.png"/></div>
            <div style="margin-top:9px;">张先生</div>
          </div>
          <div class="left" style="width:50%;padding-left:25px;">
            <div>安全等级：<span>中</span><a class="xg-blue" style="margin-left:10px;">管理</a></div>
            <div class="xg-user-account-icon"><span><img src="../../common/images/myAcountImage/perIcon5.png"/></span><span><img src="../../common/images/myAcountImage/perIcon6.png"/></span><span><img src="../../common/images/myAcountImage/perIcon7.png"/></span><span class="cur"><img src="../../common/images/myAcountImage/perIcon8.png"/></span></div>
          </div>
          <div class="left" style="border-left:1px solid #eee;padding-left:20px;">
            <div>可用余额（元）</div>
            <div class="xg-money xg-gray-more">0.00</div>
            <div>
              <a href="recharge.html" class="xg-btn-recharge xg-gradient-horizontal">充值</a>
              <a href="withdrawals.html" class="xg-btn-withdrawals">提现</a>
            </div>
          </div>
        </div>
      </div>
      <div class="light-bg" style="margin-top:10px;padding: 20px 30px;">
        <div class="xg-user-account-tab">
          <span class="select">回款中</span>
          <span>已回款</span>
          <div class="xg-gradient-horizontal"></div>
        </div>
        <table style="width:100%;margin-top:15px;">
          <tr class="xg-user-account-th xg-gray-less text-center">
            <th>回款日期</th>
            <th>项目</th>
            <th>交易金额（元）</th>
            <th>预计总收益（元）</th>
          </tr>
          <tr class="text-center" style="height:40px;">
            <td>2018-03-26</td>
            <td>鑫车宝021</td>
            <td>100.00</td>
            <td style="position: relative;">7.90<a style="position: absolute;right:10px;top:10px;" class="xg-gray">详情</a></td>
          </tr>
        </table>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'acount',
  data () {
    return {}
  },
  methods: {

  }
}
</script>
<style>

</style>
