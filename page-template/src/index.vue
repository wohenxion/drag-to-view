<template>
  <div class="page-wrap">
    <div
      class="page-element-wrapper"
      v-for="(page, i) in pageData.layouts"
      :key="i"
    >
      <render
        v-for="(item, index) in page.elements"
        :key="index"
        :componentData="item"
      ></render>
    </div>
  </div>
</template>
<script>
// const render = () => import("../components/render");
import render from "../components/render";
export default {
  name: "pageViewTemplate",
  props: ["curPageData"],
  computed: {
    pageData() {
      return this.curPageData || window._pageData;
    }
  },
  data() {
    return {
      // pageData: {
      //   layouts: []
      // }
    };
  },
  components: {
    render
  },
  mounted() {
    // this.pageData = this.curPageData || window._pageData;
  }
};
</script>
