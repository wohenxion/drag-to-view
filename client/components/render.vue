<template>
  <div @click="showForm(componentData.uid)">
    <component
      :is="code"
      :componentData="componentData"
      :config="componentData.config"
    ></component>
  </div>
</template>
<script>
import { components } from "@/ui/index.js";
import { mapActions } from "vuex";
// import { cloneDeep, merge } from "lodash";
export default {
  props: ["componentData"],
  data() {
    return {
      code: "",
      config: {}
    };
  },
  components: {
    ...components
  },
  computed: {},
  mounted() {
    this.code = this.componentData.code;
  },
  methods: {
    // showForm(uid) {
    //   console.log("test", uid);
    // }
    ...mapActions("editor", {
      showForm: "updateID"
    })
  },
  watch: {}
};
</script>
