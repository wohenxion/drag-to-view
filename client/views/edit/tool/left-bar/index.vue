<template>
  <div class="side-bar">
    <div class="side-bar-icon">
      <div class="side-bar-rigth" :style="styles"></div>
      <template v-for="(item, index) in menuArr">
        <el-tooltip
          :key="item.name"
          class="item"
          effect="dark"
          popper-class="hs"
          :content="item.name"
          placement="right"
        >
          <div
            class="icon-item"
            :class="index == curr ? 'active' : ''"
            @click="showCont(index)"
          >
            <i :class="item.icon"></i>
          </div>
        </el-tooltip>
      </template>
    </div>
    <div class="side-bar-wrap">
      <component :is="listName"></component>
    </div>
  </div>
</template>
<script>
const uiMenu = () => import("./ui-menu");
const layoutMenu = () => import("./layout");
export default {
  data() {
    return {
      menuArr: [
        {
          icon: "el-icon-menu",
          name: "组件"
        },
        {
          icon: "el-icon-s-cooperation",
          name: "工具"
        }
      ],
      listName: "uiMenu",
      curr: 0,
      componentsArr: ["uiMenu", "layoutMenu"],
      styles: {}
    };
  },
  components: {
    uiMenu,
    layoutMenu
  },
  methods: {
    showCont(index) {
      this.curr = index;
      this.listName = this.componentsArr[index];
      this.styles = {
        top: `${index * 43}px`
      };
    }
  },
  mounted() {
    this.styles = {
      top: 0
    };
  }
};
</script>
<style scoped lang="scss">
$munuColor: #777777;
$activeColor: #409eff;
.side-bar {
  display: flex;
  height: 100%;

  .side-bar-icon {
    position: relative;
    font-size: 20px;
    width: 50px;
    box-shadow: #bbb7b7 1px 2px 2px;
    .icon-item {
      cursor: pointer;
      color: $munuColor;
      display: block;
      padding: 10px;
      &:hover {
        color: $activeColor;
      }
      &.active {
        color: $activeColor;
        background: #d0e7ff;
      }
    }
    .side-bar-rigth {
      position: absolute;
      height: 43px;
      width: 2px;
      right: -2px;
      background-color: $activeColor;
      transition: top 0.2s linear;
    }
  }

  .side-bar-wrap {
    // width: 180px;
  }
}
</style>
