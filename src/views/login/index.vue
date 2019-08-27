<template>
<!-- 给表单添加ref属性，以便获取dom等元素 -->
    <div class="container"  ref="box">
        <!-- 卡片 -->
       <el-card class="my-card">
           <img src="../../assets/images/logo_index.png" alt="">
           <!-- 表格 -->
           <el-form :model="loginForm" status-icon :rules="loginRules" ref="loginForm"  >
           <!-- 添加表单校验结果反馈图标 -->
           <!-- <el-form :model="loginForm" status-icon :rules="rules"> -->
               <el-form-item prop="mobile">
                   <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
               </el-form-item>
               <el-form-item prop="code">
                   <!-- v-model双向数据绑定看后台接口文件， -->
                   <el-input v-model="loginForm.code" placeholder="请输入验证码" style="width:236px;margin-right:10px"></el-input>
                   <el-button type="primary">发送验证码</el-button>
               </el-form-item>
               <el-form-item>
                   <el-checkbox :value="true" >我已阅读并同意用户协议和隐私条款</el-checkbox>
               </el-form-item>
               <el-form-item>
                    <el-button type="primary" style="width:100%" @click="login()">登 录</el-button>
               </el-form-item>
            </el-form>

       </el-card>

    </div>
</template>

<script>
import store from '@/store'

export default {
  data () {
    // 在data 之前定义校验函数
    const checkMobile = (rule, value, callback) => {
      //  实现校验逻辑；判断是否合法手机号，只能第一位数字（1），第二位3-9，其余数字结尾即可
      // callback 是校验后的回调函数,- rule 规则对象 - value 是字段对应的值
      if (!/^1[3-9]\d{9}$/.test(value)) {
        return callback(new Error('不合法手机号'))
      }
      callback()
    }
    return {
      loginForm: {
        mobile: '15111112222',
        code: '246810'
      },
      // 表单校验规则对象
      loginRules: {
        // 给字段添加多个校验规则
        mobile: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          // 值改变触发校验规则
          { validator: checkMobile, trigger: 'change' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 6, message: '请输入验证码长度6位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      // 通过ref属性获取表单实例中的validate方法（判断是否成功），进行判断，
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          //  校验成功调用登录接口
          this.$http.post('http://ttapi.research.itcast.cn/mp/v1_0/authorizations', this.loginForm)
            .then(res => {
            // 成功跳转
            // 用户信息（res.data.data）---res响应对象=》 res.data响应主体=》响应主体包含data、message等信息。
            // 操作用户信息就是操作store 存储 （封装一个模块，进行用户信息操作，可共用）
              store.setUser(res.data.data)

              this.$router.push('/')
            })
            .catch(() => {
              this.$message.error('手机号或验证码错误')
            })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.container{
    background: url(../../assets/images/login_bg.jpg) no-repeat  center / cover;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top:0;
    .my-card{
        width: 400px;
        height: 350px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform:translate(-50%,-50%);
      img{
            display:block;
            width: 200px;
            margin: 0 auto 5px;
        }
    }

}

</style>
