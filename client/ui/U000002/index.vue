<template>
  <div class="u000002" :style="bodyStyle">
    {{ componentData.code }}<br />
    {{ config }}
  </div>
</template>
<script>
export default {
  props: ["componentData", "config"],
  name: "U000002",
  data() {
    return {
      bodyStyle: {}
    };
  },
  mounted() {
    this.bodyStyle = {
      fontSize: this.config.fontSize + "px",
      color: this.config.color,
      backgroundColor: this.config.bg_color
    };
  }
};
</script>
<style lang="scss" scope>
.u000002 {
  height: 250px;
}
</style>
