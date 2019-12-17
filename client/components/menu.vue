<template>
  <div class="component-wrap">
    <div class="mask" @click="showForm(componentData.uid)">
      <span class="component-name">{{ componentData.elName }}</span>
    </div>
    <div class="menu-wrap">
      <el-tooltip
        class="item"
        effect="dark"
        :content="componentData.code"
        placement="top"
      >
        <span class="menu-icon">{{ componentData.elName }}</span>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="编辑" placement="top">
        <i
          class="menu-icon el-icon-setting"
          @click="showForm(componentData.uid)"
        ></i>
      </el-tooltip>
      <el-tooltip
        class="item"
        effect="dark"
        content="上移"
        placement="top"
        v-if="index != 0"
      >
        <i
          class="menu-icon el-icon-top"
          @click="upPosition({ name: 'up', index })"
        ></i>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="下移" placement="top">
        <i
          class="menu-icon el-icon-bottom"
          @click="upPosition({ name: 'down', index })"
          v-if="index != count - 1"
        ></i>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="删除" placement="top">
        <i
          class="menu-icon el-icon-delete"
          @click="upPosition({ name: 'delete', index })"
        ></i>
      </el-tooltip>
    </div>
    <div class="component-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  props: ["componentData", "index"],
  data() {
    return {
      count: ""
    };
  },
  computed: {
    ...mapState("editor", ["projectData"])
  },
  mounted() {
    this.updateCount();
  },
  methods: {
    ...mapActions("editor", {
      showForm: "updateID",
      upPosition: "updateElementPosition"
    }),
    updateCount() {
      this.count = this.projectData.layouts[0].elements.length;
    }
  },
  watch: {
    projectData: {
      deep: true,
      handler() {
        this.updateCount();
      }
    }
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

  .component-content {
    text-align: left;
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
  top: 2px;
  left: 2px;
  // top: -22px;
  z-index: 101;
  background: #ffffff;
  padding: 2px 10px;
  box-shadow: 0 0 5px 0px #929191;
  border-radius: 5px;
  .item {
    padding: 4px;
    border-radius: 50px;
    background: #409eff;
    color: #fff;
    margin: 2px 3px;
    font-size: 14px;
    &:hover {
      cursor: pointer;
      background: #333;
    }
    &:focus {
      outline: none;
    }
  }
  .component-name {
    display: none;
  }
}
</style>
