<template>
  <navs>
    <ul class="nav-item">
      <li>
        <router-link
          target="_blank"
          :to="{
            path: '/preview/' + pid
          }"
        >
          <i class="el-icon-view"></i>
          <p>预览</p>
        </router-link>
      </li>
      <li @click="handleSave">
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
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    navs
  },
  computed: {
    pid() {
      return this.$route.params.pid;
    },
    ...mapState("editor", ["projectData"])
  },
  methods: {
    handleSave() {
      let data = {
        pid: this.pid,
        data: this.projectData
      };
      INTERFACE.Pages.SavePage(data).then(res => {
        if (res.status == 200) {
          this.$message({
            message: "保存成功",
            type: "success"
          });
        } else {
          this.$message.error(res.statusText);
        }
      });
    }
  }
};
</script>
<style scoped lang="scss">
.nav-item {
  display: block;
  font-size: 0;
  padding: 10px;
  li,
  a {
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
