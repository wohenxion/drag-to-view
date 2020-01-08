<template>
  <div class="edit-nav">
    <span class="icon-home"
      ><router-link to="/"> <i class="el-icon-platform-eleme"></i></router-link
    ></span>
    <slot> </slot>
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
  height: 58px;
  // line-height: 58px;
  overflow: hidden;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  box-shadow: rgb(187, 183, 183) 0px 2px 4px;
  z-index: 10;
  a {
    font-weight: bold;
    color: #2c3e50;
  }
  .icon-home {
    position: absolute;
    left: 20px;
    line-height: 58px;
    top: 2px;
    font-size: 40px;
    a {
      color: #25a589;
    }
  }
}
</style>
