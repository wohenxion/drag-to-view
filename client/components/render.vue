<template>
  <menus :componentData="componentData" :index="index">
    <component
      :is="code"
      :componentData="componentData"
      :config="configData"
    ></component>
  </menus>
</template>
<script>
import { components } from "@/ui/index.js";
import { flattenMd } from "@common/uitls.js";
const menus = () => import("./menu.vue");
// import { flatten } from "lodash";
export default {
  props: ["componentData", "index"],
  data() {
    return {
      code: ""
    };
  },
  components: {
    ...components,
    menus
  },
  computed: {
    configData() {
      let arr;
      arr = flattenMd(this.componentData.config.tabs);
      let data = {};
      arr.map(item => {
        data[item.name] = item.value;
      });
      return data;
    }
  },
  mounted() {
    this.code = this.componentData.code;
  },
  watch: {}
};
</script>
