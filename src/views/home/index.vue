<template>
    <!-- 首页基础布局 -->
<el-container class="my-container">
    <!-- 侧边导航菜单 -->
    <el-aside :width="isCollapse?'64px':'200px'">
        <!-- logo :设置图标为背景图便于操作-->
        <!-- 动态绑定类名，控制大小 -->
        <div class="logo" :class="{miniLogo:isCollapse}"></div>
        <!-- 导航菜单 -->
            <el-menu
       default-active="/"
        class="el-menu-vertical-demo"
        background-color="#002033"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="isCollapse"
      :collapse-transition="false"

      router
        >
    <!--router属性 激发路由 ：加 router 属性，把index的值当作路径进行跳转。-->
      <el-menu-item index="/">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/article">
        <i class="el-icon-document"></i>
        <span slot="title">内容管理</span>
      </el-menu-item>
      <el-menu-item index="/image">
        <i class="el-icon-picture"></i>
        <span slot="title">素材管理</span>
      </el-menu-item>
        <el-menu-item index="/publish">
          <i class="el-icon-s-promotion"></i>
          <span slot="title">发布文章</span>
        </el-menu-item>
        <el-menu-item index="/comment">
          <i class="el-icon-chat-dot-round"></i>
          <span slot="title">评论管理</span>
        </el-menu-item>
        <el-menu-item index="/fans">
          <i class="el-icon-present"></i>
          <span slot="title">粉丝管理</span>
        </el-menu-item>
        <el-menu-item index="/setting">
          <i class="el-icon-setting"></i>
          <span slot="title">个人设置</span>
           </el-menu-item>
    </el-menu>

    </el-aside>
    <el-container>
        <!-- 头部内容 -->
      <el-header>
          <span @click="toggleAside()" class="icon el-icon-s-fold"></span>
          <span class="text"> 江苏传智播客科技教育有限公司</span>
        <!-- 下拉菜单组件 -->
        <el-dropdown class="my-dropdown">
          <span class="el-dropdown-link">
            <img class="avatar" src="../../assets/images/avatar.jpg" alt="">
            <span class="name"> 用户名称</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <!-- vue基础知识  插槽 -->
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-setting">个人设置</el-dropdown-item>
            <el-dropdown-item icon="el-icon-unlock">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

      </el-header>
      <el-main>
          <!-- 首页欢迎 :渲染页面-->
          <router-view></router-view>

      </el-main>
    </el-container>
  </el-container>

</template>

<script>
export default {
  // 通过数据切换页面
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    toggleAside () {
      // 切换两个状态
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style lang="less" scoped>
//
.my-container{
    // 标签选择器  渲染后显示组件的html标签  不是当前组件的自定义标签
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    .el-aside{
    background: #002033;
    .logo{
        width: 100%;
        height: 60px;
        background: #002244 url(../../assets/images/logo_admin.png) no-repeat center / 140px auto ;
    }
    // 利用层级渲染特性，当开关切换时更改图片,s使用背景图不更改原来页面其他属性
    .miniLogo {
      background-image: url(../../assets/images/logo_admin_01.png);

    //   ？？？？bgz
      background-size: 36px auto;
    }
    .el-menu{
        border-right: none;
    }
  }
    .el-header{
    border-bottom: 1px solid #ddd;
    line-height: 60px;
    .icon{
        vertical-align:middle;
    }
    .text{
        vertical-align:middle;
    }
    .my-dropdown{
        float: right;
        .avatar{
            width: 30px;
            height: 30px;
            vertical-align: middle;
        }
        .name{
            color: #333;
            font-weight: bold;
            vertical-align: middle;
        }
    }

  }
}
</style>
