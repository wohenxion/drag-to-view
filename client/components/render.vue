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
      // this.componentData.data.config.forEach(item => {
      //   arr = arr.concat(item.tabs);
      // });
      function flattenMd(arr) {
        var result = [];
        for (var i = 0; i < arr.length; i++) {
          if (arr[i].items instanceof Array) {
            result = result.concat(flattenMd(arr[i].items));
          } else {
            result.push(arr[i]);
          }
        }
        return result;
      }
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
