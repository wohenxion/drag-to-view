<template>
  <div class="edit-nav">
    <span class="icon-home"
      ><router-link to="/"> <i class="el-icon-s-home"></i></router-link
    ></span>
    <ul class="nav-item">
      <li>
        <i class="el-icon-view"></i>
        <p>预览</p>
      </li>
      <li>
        <i class="el-icon-success"></i>
        <p>保存</p>
      </li>
      <li>
        <i class="el-icon-s-promotion"></i>
        <p>发布</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped lang="scss">
.edit-nav {
  // text-align: left;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .icon-home {
    position: absolute;
    left: 10px;
    line-height: 58px;
  }
  .nav-item {
    display: block;
    font-size: 0;
    padding: 10px;
    li {
      display: inline-block;
      font-size: 14px;
      vertical-align: top;
      cursor: pointer;
      margin: 0 10px;
      &:hover {
        color: #409eff;
      }
      i {
        font-size: 20px;
      }
    }
  }
}
</style>
