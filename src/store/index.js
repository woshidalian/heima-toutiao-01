// 负责：用户信息的 存贮 获取 删除操作

const KEY = 'hema-toutiao-80-user'
export default {
  setUser (user) {
    // 存储用户信息
    // user 数据类型 对象  转换为字符串
    const jsonStr = JSON.stringify(user)
    // 存储到本地
    window.sessionStorage.setItem(KEY, jsonStr)
  },
  getUser () {
    // 获取用户信息
    //  用户信息没有数据 =》返回null=》token报错。
    //  ”{}“空对象=》token=》undefined
    const jsonStr = window.sessionStorage.getItem(KEY) || '{}'
    //  转换为对象格式便于操作
    return JSON.parse(jsonStr)
  },
  delUser () {
    //  删除信息
    window.sessionStorage.removeItem(KEY)
  }
}
