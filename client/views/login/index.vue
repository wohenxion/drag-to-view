<template>
  <el-form
    :model="loginForm"
    :rules="rules"
    ref="loginForm"
    label-width="100px"
    class="loginForm"
  >
    <el-form-item label="用户名" prop="userName">
      <el-input v-model="loginForm.userName"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="passWord">
      <el-input v-model="loginForm.passWord" type="password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('loginForm')"
        >登录</el-button
      >
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      loginForm: {
        userName: "",
        passWord: ""
      },
      rules: {
        userName: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          }
        ],
        passWord: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.login();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    login() {
      localStorage.setItem("testToken", "testToken");
      this.$router.push({ name: "pageList" });
    }
  }
};
</script>
<style lang="scss">
.loginForm {
  width: 400px;
  padding: 50px 120px 30px 60px;
  box-sizing: content-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 2px 2px #e8e8e8;
  border-radius: 16px;
}
</style>
