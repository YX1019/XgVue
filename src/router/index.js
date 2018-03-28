import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import index from '@/components/index'
// import topMenu from '@/components/topMenu/topMenu'
// import foot from '@/components/foot/foot'
import noviceWelfare from '@/components/mainPage/noviceWelfare'
import indexList from '@/components/mainPage/indexList'
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
      path: '/indexList',
      name: 'indexList',
      component: indexList
    }
    // ,
    // {
    //   path: '/foot/foot',
    //   name: 'foot',
    //   component: foot
    // }
  ]
})
