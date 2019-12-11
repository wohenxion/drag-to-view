<template>
  <el-input v-bind:value="item.value" @input="handelUpdate($event)"> </el-input>
</template>
<script>
export default {
  props: ["item"],
  methods: {
    handelUpdate(data) {
      this.item.value = data;
    }
  }
};
</script>
