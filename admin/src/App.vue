<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu router :default-openeds="['1','2','3']" class="el-menu-vertical-demo"
      
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">

        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-document"></i>文章管理
          </template>
          <el-menu-item-group>
            <el-menu-item index="/list">文章列表</el-menu-item>
            <el-menu-item index="/create">新建文章</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-user"></i>用户信息
          </template>
          <el-menu-item-group>
            <el-menu-item index="/useredit">添加用户</el-menu-item>
            <el-menu-item index="/user">所有用户</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

<el-submenu index="3">
          <template slot="title">
            <i class="el-icon-user"></i>关于程序
          </template>
          <el-menu-item-group>
            <el-menu-item index="/useredit">建议反馈</el-menu-item>
            
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <div style="position:fixed;width:300px;right:100px;top:10px;">
      <el-input
        v-model="input"
        placeholder="请输入搜索内容"
        prefix-icon="el-icon-search"
        style="width:180px;margin-right:10px;"
      ></el-input>
      <el-button type="primary" style="width:20px；text-align: center;" plain :loading='isloading'
      @click="serch">查询</el-button>
    </div>
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <span>张杰</span>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "app",
  data(){
    return {
      input: '',
      loading:'',
      isloading:false
    }
  },
  methods:{
    serch(){
      this.isloading = true;
      

    }
  },
  components: {}
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
