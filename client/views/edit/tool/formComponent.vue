<template>
  <el-col :span="item.col || 24">
    <el-form-item :label="item.label" size="small">
      <component :is="type" :item="item"></component>
    </el-form-item>
  </el-col>
</template>
<script>
import formComponent from "./formComponents/index";
export default {
  props: ["item"],
  data() {
    return {
      type: ""
    };
  },
  mounted() {
    this.type = this.item.type || "inputs";
  },
  components: {
    ...formComponent
  }
};
</script>
