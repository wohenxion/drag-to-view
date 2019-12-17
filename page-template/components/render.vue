<template>
  <component
    class="page-element"
    :is="code"
    :componentData="componentData"
    :config="configData"
  ></component>
</template>
<script>
import { components } from "@/ui/all.js";
import { flattenMd } from "@common/uitls.js";
export default {
  props: ["componentData"],
  data() {
    return {
      code: ""
    };
  },
  components: {
    ...components
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
  }
};
</script>
<style lang="scss">
.page-element {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
