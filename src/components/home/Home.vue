<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {

}
</script>

<style>
.el-container {
  height: 100%;
}
.el-header {
  background-color: #b3c1cd;
}
.el-aside {
  background-color: #545164;
}
.el-main {
  background-color: #eaeef1;
}
</style>
