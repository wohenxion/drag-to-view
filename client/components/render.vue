<template>
  <menus :componentData="componentData" :index="index">
    <component
      :is="code"
      :componentData="componentData"
      :config="componentData.config"
    ></component>
  </menus>
</template>
<script>
import { components } from "@/ui/index.js";
const menus = () => import("./menu.vue");
// import { cloneDeep, merge } from "lodash";
export default {
  props: ["componentData", "index"],
  data() {
    return {
      code: "",
      config: {}
    };
  },
  components: {
    ...components,
    menus
  },
  computed: {},
  mounted() {
    this.code = this.componentData.code;
  },
  watch: {}
};
</script>
