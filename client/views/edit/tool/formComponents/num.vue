<template>
  <el-input-number
    v-model="item.value"
    controls-position="right"
    :min="item.range && item.range.length ? item.range[0] : -Infinity"
    :max="item.range && item.range.length > 1 ? item.range[1] : Infinity"
  ></el-input-number>
</template>
<script>
export default {
  props: ["item"]
};
</script>
