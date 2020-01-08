<template>
  <el-container>
    <navs></navs>
    <!-- <el-header id="nav"> <router-link to="/">Home</router-link> </el-header> -->
    <el-container>
      <el-aside width="200px" class="aside-nav">
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          router
        >
          <el-menu-item index="/pageList">
            <i class="el-icon-news"></i>
            <span slot="title">我的页面</span>
          </el-menu-item>
          <el-menu-item index="/setting">
            <i class="el-icon-menu"></i>
            <span slot="title">设置</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <router-link to="/edit">Edit</router-link>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
import navs from "@/components/nav.vue";
export default {
  data() {
    return {};
  },
  components: {
    navs
  }
};
</script>
<style>
.el-container {
  height: 100%;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;

  height: 100%;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
}
.el-menu {
  text-align: left;
  height: 100%;
}
</style>
<style scoped lang="scss">
.home-wrap {
  box-sizing: border-box;
  margin-top: 2px;
  overflow: hidden;
}
a {
  color: #000;
}
.is-active {
  background: #409eff;
  color: #fff;
  a {
    color: #fff;
  }
}
</style>
