<template>
  <div class="home">
    <button @click="addUI">新增U000001组件测试</button>
    <formRender></formRender>
    <template v-for="item in elements">
      <div class="menu-wrap" :key="item.uid">
        <render :componentData="item"></render>
      </div>
    </template>
  </div>
</template>

<script>
// @ is an alias to /src

const render = () => import("@/components/render");
const formRender = () => import("@/components/formRender");
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
          elName: "", // 组件名
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
          elName: "", // 组件名
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
          elName: "", // 组件名
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
    formRender
  },
  mounted() {
    this.projectData.layouts[0].elements = this.elements;
    this.updatePro(this.projectData);
  },
  methods: {
    addUI() {
      let elements = dbModel.getElementConfig();
      elements.code = "U000001";
      elements.elName = "测试";
      this.projectData.layouts[0].elements.push(elements);
      this.updatePro(this.projectData);
      this.$store.dispatch("editor/updateID", elements.uid);
    },
    updatePro(data) {
      this.$store.dispatch("editor/updateProjectData", data);
    }
  }
};
</script>
