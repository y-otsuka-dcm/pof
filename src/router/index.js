import Vue from 'vue'
import Router from 'vue-router'
import Mypage from '@/components/Mypage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Mypage',
      component: Mypage
    }
  ]
})
