<template>
  <navs>
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
  </navs>
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
<style scoped lang="scss">
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
</style>
