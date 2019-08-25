//  职责：创建一个router给main使用
import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/login'

import Home from '@/views/home'
import Welcome from '@/views/welcome'
import NotFound from '@/views/404'

//  注册实例router对象
Vue.use(VueRouter)
// 创建router实例
const router = new VueRouter({
  // 定义路由规则（路径==>组件）
  routes: [
    // { path: '/', redirect: '/login' },
    // name 方便跳转路由
    // 跳转方便一些：$router.push('/login') 或者 $router.push({name:'login'})
    { path: '/login', name: 'login', component: Login },
    // 配置二级路由
    {
      path: '/',
      component: Home,
      children: [
        // 路由规则  子路由有名称  父路由不需要设置name属性
        { path: '/', name: 'welcome', component: Welcome }
      ]
    },
    { path: '*', name: '404', component: NotFound }
  ]
})

export default router
