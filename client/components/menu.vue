<template>
  <div class="component-wrap">
    <div class="mask" @click="showForm(componentData.uid)"></div>
    <div class="menu-wrap">
      <button>{{ componentData.code }}</button>
      <button>删除</button>
      <button>上移</button>
      <button>下移</button>
    </div>
    <div class="component-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: ["componentData"],
  methods: {
    ...mapActions("editor", {
      showForm: "updateID"
    })
  }
};
</script>
<style scoped lang="scss">
.component-wrap {
  position: relative;
  &:hover {
    .mask,
    .menu-wrap {
      display: block;
    }
  }
  .mask {
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.2;
    top: 0;
    left: 0;
    background: #000;
    cursor: pointer;
    z-index: 100;
  }
}
.menu-wrap {
  display: none;
  position: absolute;
  top: -22px;
}
</style>
