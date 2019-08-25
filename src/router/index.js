//  职责：创建一个router给main使用
import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/login'

//  注册实例router对象
Vue.use(VueRouter)
// 创建router实例
const router = new VueRouter({
  // 定义路由规则（路径==>组件）
  routes: [
    { path: '/', redirect: '/login' },
    // name 方便跳转路由
    { path: '/login', name: 'login', component: Login }
  ]
})

export default router
