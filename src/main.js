import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'// 按说明引入
// import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'// 按说明引入：样式

import router from '@/router'
Vue.use(ElementUI)// 按说明引入：插件形式
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// main.js
// 1.负责依赖资源的全局导入。
// 2.创建Vue根实例，去管理index.html中的APP容器。
// （管理思维）
