<template>
  <div class="edit" ref="edit">
    {{ elements }}
    <layout>
      <template v-slot:sideBar> </template>
      <template v-slot:menu> <menus></menus> </template>
      <draggable
        v-model="elements"
        group="people"
        ghost-class="ghost"
        chosen-class="chosen"
        @end="drag = false"
      >
        <transition-group type="transition" name="flip-list">
          <template v-for="item in elements">
            <div
              class="menu-wrap"
              :data-ui="item.code"
              :key="item.uid"
              @dragstart="start($event)"
            >
              <render :componentData="item"></render>
            </div>
          </template>
        </transition-group>
      </draggable>
      <template v-slot:right>
        <formRender></formRender>
      </template>
    </layout>
  </div>
</template>

<script>
// @ is an alias to /src

const render = () => import("@/components/render");
const formRender = () => import("@/views/edit/tool/formRender");
const draggable = () => import("vuedraggable");
const layout = () => import("./layout/index");
const menus = () => import("./tool/left-bar/index");
// import { cloneDeep } from "lodash";
import dbModel from "../../views/DataModel";
// import { mapState } from "vuex";

export default {
  name: "home",
  data() {
    return {
      elements: [
        {
          uid: "u0001",
          code: "U000001",
          elName: "U000001", // 组件名
          animations: [], // 动画
          events: [], // 事件
          config: {
            fontSize: 20,
            color: "#78d433"
          } // 表单配置
        },
        {
          uid: "u0002",
          code: "U000002",
          elName: "U000002", // 组件名
          animations: [], // 动画
          events: [], // 事件
          config: {
            fontSize: 25,
            color: "#d43358"
          } // 表单配置
        },
        {
          uid: "u0003",
          code: "U000001",
          elName: "U000001", // 组件名
          animations: [], // 动画
          events: [], // 事件
          config: {
            fontSize: 30,
            color: "#3382d4"
          } // 表单配置
        }
      ],
      projectData: dbModel.getProjectConfig()
    };
  },
  components: {
    render,
    formRender,
    layout,
    menus,
    draggable
  },
  mounted() {
    this.projectData.layouts[0].elements = this.elements;
    this.updatePro(this.projectData);
  },
  methods: {
    addUI() {
      alert(1);
      let elements = dbModel.getElementConfig();
      elements.code = "U000001";
      elements.elName = "测试";
      this.projectData.layouts[0].elements.push(elements);
      this.updatePro(this.projectData);
      this.$store.dispatch("editor/updateID", elements.uid);
    },
    updatePro(data) {
      this.$store.dispatch("editor/updateProjectData", data);
    },
    // 拖拽组件替换为默认样式
    start(ev) {
      const img = new Image();
      img.width = 100;
      img.height = 100;
      img.src = "#";
      ev.dataTransfer.setDragImage(img, 50, 20);
    }
  }
};
</script>
<style scoped lang="scss">
.edit {
  height: 100%;
}
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  height: 80px;
  position: relative;
  box-sizing: border-box;
  &::after {
    content: "释放之后，组件将会放在此处";
    position: absolute;
    width: 100%;
    height: 100%;
    line-height: 80px;
    color: #fff;
    background: #71b6fc;
    border: 2px solid #409eff;
    top: 0;
    left: 0;
    box-sizing: border-box;
  }
}
// .chosen {
//   width: 150px;
//   height: 40px;
//   background: red;
//   overflow:hidden;
// }
</style>
