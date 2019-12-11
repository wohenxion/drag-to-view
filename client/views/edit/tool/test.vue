<template>
  <el-input v-model="names" @input="handelUpdate"></el-input>
</template>
<script>
export default {
  props: ["name"],
  data() {
    return {
      names: ""
    };
  },
  mounted() {
    this.names = this.name;
  },
  methods: {
    handelUpdate() {
      this.$emit("update:name", this.names);
    }
  }
};
</script>
