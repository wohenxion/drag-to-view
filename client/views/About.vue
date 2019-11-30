<template>
  <div class="about">
    <h1>This is an about page</h1>
    <template v-for="item in pageCont">
      <render :componentData="item" :key="item.code"></render>
    </template>
  </div>
</template>
<script>
const render = () => import("@/components/render");
export default {
  data() {
    return {
      pageCont: [
        {
          code: "U000003",
          name: "test3"
        }
      ]
    };
  },
  components: {
    render
  }
};
</script>
