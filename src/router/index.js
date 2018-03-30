import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
// import topMenu from '@/components/topMenu/topMenu'
// import foot from '@/components/foot/foot'
import noviceWelfare from '@/components/mainPage/noviceWelfare'
import indexList from '@/components/mainPage/indexList'
import myAcount from '@/components/myAcount/myAcount'
import acount from '@/components/myAcount/acount'
import user from '@/components/myAcount/user'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '/indexList',
          name: 'indexList',
          component: indexList
        },
        {
          path: '/myAcount',
          name: 'myAcount',
          component: myAcount,
          children: [
            {
              path: 'acount',
              name: 'acount',
              component: acount
            },
            {
              path: 'user',
              component: user
            }
          ]
        }
      ]
    },
    {
      path: '/noviceWelfare',
      name: 'noviceWelfare',
      component: noviceWelfare
    }
    // {
    //   path: '/myAcount',
    //   name: 'myAcount',
    //   component: myAcount,
    //   children: [
    //     {
    //       path: 'acount',
    //       name: 'acount',
    //       component: acount
    //     },
    //     {
    //       path: 'user',
    //       component: user
    //     }
    //   ]
    // }
    // ,
    // {
    //   path: '/foot/foot',
    //   name: 'foot',
    //   component: foot
    // }
  ]
})
