<template>
  <div class="login-out" @click="logout">
    <i class="el-icon-switch-button"></i>
    <p>退出</p>
  </div>
</template>
<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem("testToken");
      this.$router.push({ name: "login" });
    }
  }
};
</script>
<style lang="scss">
.login-out {
  position: absolute;
  right: 40px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #409eff;
  padding: 2px 7px;
  &:hover {
    color: rgb(228, 26, 26);
  }
}
</style>
