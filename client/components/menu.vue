<template>
  <div class="component-wrap">
    <div class="mask" @click="showForm(componentData.uid)">
      <span class="component-name">{{ componentData.elName }}</span>
    </div>
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
<style lang="scss">
.edit-container {
  .menu-wrap {
    &:nth-child(odd) {
      .showLayout {
        .mask {
          background-color: #f1f1f1;
        }
      }
    }
  }
}
</style>
<style scoped lang="scss">
.component-wrap {
  position: relative;
  &.showLayout {
    height: 60px;
    overflow: hidden;

    .mask {
      display: block;
      background: #fff;
      border: none;
      line-height: 60px;
    }
    .component-name {
      display: block;
    }
    &:hover {
      .mask {
        background: #409eff;
        color: #fff;
        z-index: 101;
      }
    }
  }
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
    top: 0;
    left: 0;
    cursor: pointer;
    z-index: 100;
    border: 2px dashed #409eff;
  }
}
.menu-wrap {
  display: none;
  position: absolute;
  top: 0;
  // top: -22px;
  z-index: 101;
  .component-name {
    display: none;
  }
}
</style>
