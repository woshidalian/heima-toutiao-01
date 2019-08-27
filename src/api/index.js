// 配置一个符合项目需要的axios   导出去进行全局的配置
import axios from 'axios'
import store from '@/store'
import router from '@/router'
// 进行配置
// 1. 基准地址
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'
// 2. 请求头 token
// axios.defaults.headers.Authorization = `Bearer+'空格'+ ${store.getUser().token}`
// axios.defaults.headers.Authorization = `Bearer ${store.getUser().token}`
//

// 请求拦截器：存在每一次请求前
axios.interceptors.request.use(config => {
  // 修改配置 加 token(每次请求都携带token)
  config.headers.Authorization = `Bearer ${store.getUser().token}`
  return config
}, err => {
  return Promise.reject(err)
})

//  响应拦截器：存在每一次响应后
// res => { return res } ==== res => res
axios.interceptors.response.use(res => res, err => {
  // 1.获取响应状态码
  const status = err.response.status
  console.log(status)
  // 2.判断401
  if (status === 401) {
    // 3.清除无效token
    store.delUser()
    // 4. 跳转登录
    // 4.1 原生方式改路径  router基于hash实现  /login ===> #/login
    // window.location.hash = '#/login'
    // 4.2 使用router进行跳转  $router本质 main.js导入了router/index.js的实例 挂载vue根实例下。
    router.push('/login')
  }
  return Promise.reject(err)
})

// axios.interceptors.response.use(res => res, err => {
//   // 自己逻辑
//   // 1. 获取状态码
//   const status = err.response.status
//   // 2. 判断401
//   if (status === 401) {
//     // 3. 清除无效token
//     store.delUser()
//     // 4. 跳转登录
//     // 4.1 原生方式改路径  router基于hash实现  /login ===> #/login
//     // window.location.hash = '#/login'
//     // 4.2 使用router进行跳转  $router本质 main.js导入了router/index.js的实例 挂载vue根实例下。       所有的Vue实例（xxx.vue）都可以通过this.$router使用。其他则需使用router。
//     router.push('/login')
//   }
//   return Promise.reject(err)
// })
export default axios
