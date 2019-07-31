<template>
  <el-container>
    <!-- 头部 -->
    <el-header>
      <el-row>
        <el-col :span='8'><img
            src="../../assets/logo.png"
            alt=""
          ></el-col>
        <el-col :span='8'>
          <h1>电商后台管理系统</h1>
        </el-col>
        <el-col
          :span='8'
          class='col3'
        >
          恭喜上海前端36期月薪2w
          <a
            href="#"
            @click.prevent="logout"
          >退出</a>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          :router='true'
          :default-active="handleUrlPath()"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index='/users'>用户列表</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item index='/roles'>角色列表</el-menu-item>
            <el-menu-item index='/rights'>权限列表</el-menu-item>
          </el-submenu>
          <!-- <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item index='3-1'>商品列表</el-menu-item>
            <el-menu-item index='3-2'>分类参数</el-menu-item>
            <el-menu-item index='3-3'>商品分类</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item index='4-1'>订单列表</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>数据统计</span>
            </template>
            <el-menu-item index='5-1'>数据报表</el-menu-item>
          </el-submenu> -->
          <!-- <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item> -->
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$confirm('此操作将退出该账户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        localStorage.removeItem('token')
        this.$message({
          message: '退出成功',
          type: 'success',
          duration: 800
        })
        this.$router.push('/login')
      }).catch(() => {
        this.$message({
          message: '取消退出',
          type: 'info',
          duration: 800
        })
      })
    },
    handleUrlPath () {
      return this.$route.path
    }

  }
}
</script>

<style lang = 'less'>
.el-container {
  height: 100%;
}
a {
  color: lime;
}
.col3 {
  line-height: 60px;
  text-align: right;
  padding-right: 30px;
}
h1 {
  font-size: 26px;
  line-height: 60px;
  text-align: center;
  color: #fff;
}
.el-header {
  background-color: #b3c1cd;
  padding: 0 !important;
}
.el-aside {
  background-color: #545164;
}
.el-main {
  background-color: #eaeef1;
}
</style>
