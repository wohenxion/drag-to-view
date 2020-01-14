<template>
  <div class="preview-wrap">
    <header>header</header>
    <preview :curPageData="projectData"></preview>
    <footer>footer</footer>
  </div>
</template>
<script>
import preview from "../../../page-template/src/index.vue";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("editor", ["projectData"])
  },
  mounted() {
    let params = {
      pid: this.$route.params.pid
    };
    INTERFACE.Pages.PageDetail(params).then(res => {
      this.$store.dispatch("editor/updateProjectData", res.data);
    });
  },
  components: {
    preview
  }
};
</script>
<style lang="scss">
.page-view {
  padding-top: 0;
}
</style>
