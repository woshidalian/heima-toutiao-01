import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'// 按说明引入

import 'element-ui/lib/theme-chalk/index.css'// 按说明引入：样式

import router from '@/router'
Vue.use(ElementUI)// 按说明引入：插件形式
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
