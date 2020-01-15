<template>
  <div class="u000002" :style="bodyStyle">
    <h2>{{ config.title }}</h2>
  </div>
</template>
<script>
export default {
  props: ["componentData", "config"],
  name: "U000002",
  computed: {
    bodyStyle() {
      const style = {
        fontSize: this.config.fontSize + "px",
        color: this.config.color,
        backgroundColor: this.config.bg_color
      };
      return style;
    }
  }
};
</script>
<style lang="scss" scope>
.u000002 h2 {
  padding: 20px;
}
</style>
