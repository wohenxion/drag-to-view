<template>
  <div class="edit" ref="edit">
    <layout>
      <template v-slot:header><heads></heads> </template>
      <template v-slot:menu> <menus></menus> </template>
      <draggable
        v-model="elements"
        group="people"
        ghost-class="ghost"
        chosen-class="chosen"
        :setData="setData"
        @change="change"
        @end="drag = false"
        class="dragArea"
      >
        <transition-group
          type="transition"
          name="flip-list"
          tag="div"
          class="dragArea-transiton"
        >
          <template v-for="(item, index) in elements">
            <div
              class="menu-wrap"
              :data-ui="item.code"
              :key="item.uid"
              :class="{ active: currIndex !== '' && currIndex == index }"
            >
              <render :componentData="item" :index="index"></render>
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
const heads = () => import("./tool/head");
// import { cloneDeep } from "lodash";
import dbModel from "../../views/DataModel";
import { mapState } from "vuex";

export default {
  name: "home",
  data() {
    return {
      elements: [],
      projectData: dbModel.getProjectConfig(),
      currIndex: ""
    };
  },
  components: {
    render,
    formRender,
    layout,
    menus,
    heads,
    draggable
  },
  computed: {
    ...mapState("editor", ["activeElementUUID"])
  },
  mounted() {
    // this.projectData.layouts[0] 此处只考虑单布局，所以写死为0;如果要实现多布局，需要外面再循环，然后取对应的layout下标
    this.projectData.layouts[0].elements = this.elements;
    this.updatePro(this.projectData);
    this.bindEvent();
  },
  methods: {
    updatePro(data) {
      this.$store.dispatch("editor/updateProjectData", data);
    },
    // 拖拽组件替换为默认样式
    setData(dataTransfer) {
      const img = new Image();
      img.width = 100;
      img.height = 100;
      img.src = "#";
      dataTransfer.setDragImage(img, 50, 20);
    },
    change(item) {
      // this.currIndex = item[Object.keys(item)[0]].newIndex;
      this.projectData.layouts[0].elements = this.elements;
      this.updatePro(this.projectData);
      // console.log("edit/index/id", item[Object.keys(item)[0]].element.uid);
      this.$store.dispatch(
        "editor/updateID",
        item[Object.keys(item)[0]].element.uid
      );
    },
    bindEvent() {
      let that = this;
      window.addEventListener("click", function() {
        that.currIndex = "";
        that.$store.dispatch("editor/updateID", "");
      });
    }
  },
  watch: {
    projectData: {
      deep: true,
      handler(newObj) {
        this.currIndex = newObj.layouts[0].elements.findIndex(item => {
          return item.uid == this.activeElementUUID;
        });
      }
    },
    activeElementUUID(newID) {
      this.currIndex = this.projectData.layouts[0].elements.findIndex(item => {
        return item.uid == newID;
      });
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
.dragArea-transiton {
  min-height: 80vh;
}
</style>
<style lang="scss">
.edit .menu-wrap.active {
  .mask {
    display: block;
    border: 2px dashed #efd8e0;
  }
}
.ghost {
  height: 80px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
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
</style>
