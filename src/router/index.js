import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import index from '@/components/index'
// import topMenu from '@/components/topMenu/topMenu'
// import foot from '@/components/foot/foot'
import noviceWelfare from '@/components/mainPage/noviceWelfare'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/noviceWelfare',
      name: 'noviceWelfare',
      component: noviceWelfare
    }
    // {
    //   path: '/index',
    //   name: 'index',
    //   component: index
    // }
    // ,
    // {
    //   path: '/foot/foot',
    //   name: 'foot',
    //   component: foot
    // }
  ]
})
