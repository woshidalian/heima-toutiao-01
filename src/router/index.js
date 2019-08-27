//  职责：创建一个router给main使用
import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/login'

import Home from '@/views/home'
import Welcome from '@/views/welcome'
import NotFound from '@/views/404'

import store from '@/store'

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
// 前置守卫
// router.beforeEach((to, from, next) => {
//   // 1。去的是登录路径的时候 放行
//   if (to.path === '/login') return next()
//   // 2.不是登录 且 没有登录拦截 登录页面
//   if (!store.getUser().token) return next('/login')
//   // 3.其他放行
//   next()
//   // if (to.path !== '/login' && !store.getUser().token) return next('/login')
//   // next()
// })

// 前置守卫
router.beforeEach((to, from, next) => {
  // console.log(to)
  // console.log(from)
  // return
  // 1. 去的路径是登录的时候  放行
  if (to.path === '/login') return next()
  // 2. 不是登录的时候 且 并没有登录  拦截 登录页面
  if (!store.getUser().token) return next('/login')
  // 3. 其他情况 放行
  next()
  if (to.path !== '/login' && !store.getUser().token) return next('/login')
  next()
})
export default router
