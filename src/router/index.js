import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import index from '@/components/index'
// import topMenu from '@/components/topMenu/topMenu'
// import foot from '@/components/foot/foot'
import noviceWelfare from '@/components/mainPage/noviceWelfare'
import indexList from '@/components/mainPage/indexList'
import myAcount from '@/components/myAcount/myAcount'
import acount from '@/components/myAcount/acount'
import user from '@/components/myAcount/user'
import transdetail from '@/components/myAcount/transdetail'
import bankCard from '@/components/myAcount/bankCard'
import redPack from '@/components/myAcount/redPack'
import invitation from '@/components/myAcount/invitation'
import message from '@/components/myAcount/message'
import login from '@/components/mainPage/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexList',
      component: indexList
    },
    {
      path: '/noviceWelfare',
      name: 'noviceWelfare',
      component: noviceWelfare
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/myAcount',
      name: 'myAcount',
      component: myAcount,
      children: [
        {
          path: '/',
          name: 'acount',
          component: acount
        },
        {
          path: '/user',
          component: user
        },
        {
          path: '/transdetail',
          component: transdetail
        },
        {
          path: '/bankCard',
          component: bankCard
        },
        {
          path: '/redPack',
          component: redPack
        },
        {
          path: '/invitation',
          component: invitation
        },
        {
          path: '/message',
          component: message
        }
      ]
    }
    // ,
    // {
    //   path: '/foot/foot',
    //   name: 'foot',
    //   component: foot
    // }
  ]
})
