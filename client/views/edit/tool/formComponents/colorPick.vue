<template>
  <el-color-picker v-model="item.value" size="medium"></el-color-picker>
</template>
<script>
export default {
  props: ["item"]
};
</script>
