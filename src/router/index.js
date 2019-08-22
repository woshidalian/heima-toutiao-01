//  职责：创建一个router给main使用
import Vue from 'vue'
import VueRouter from 'vue-router'
//  注册
Vue.use(VueRouter)
// 创建router实例
const router = new VueRouter({
  // 定义路由规则（路径==>组件）
  routes: []
})

export default router
