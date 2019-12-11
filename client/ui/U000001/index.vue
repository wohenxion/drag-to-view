<template>
  <div
    class="u000001"
    :style="{
      fontSize: config.fontSize + 'px',
      color: config.color
    }"
  >
    <p>{{ config.title }}</p>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  props: ["componentData", "config"],
  name: "U000001",
  data() {
    return {
      style: {}
    };
  },
  computed: {
    ...mapState({
      currentStyle: state => state.editor.currentStyle
    }),
    ...mapGetters("editor", ["activeElement"])
  },
  mounted() {
    // console.log("config", this.config);
  }
};
</script>
<style lang="scss" scope>
.u000001 {
  padding: 15px;
}
</style>
