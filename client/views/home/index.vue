<template>
  <div class="home">
    <button>新增U000001组件测试</button>
    <br />
    <br />
    {{ formData }}
    <br />
    <!-- <img alt="Vue logo" src="@/assets/logo.png" /> -->
    <template v-for="item in formData">
      <input type="text" v-model="item.value" :key="item.name" />
    </template>

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
import { mapState } from "vuex";
// import { cloneDeep } from "lodash";
import dbModel from "../../views/DataModel";

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
  computed: {
    ...mapState({
      formData: state => state.editor.formData
    })
    // ...mapGetters("editor", ["activeElement"])
  },
  components: {
    render
  },
  mounted() {
    this.projectData.layouts[0].elements = this.elements;
    this.$store.dispatch("editor/updateProjectData", this.projectData);
  },
  methods: {
    arrToJson(arr) {
      let data = {};
      arr.map(item => {
        data[item.name] = item.value;
      });
      this.$store.dispatch("editor/updateProjectStyle", data);
      // return data;
    }
  },
  watch: {
    formData: {
      handler(newData) {
        this.arrToJson(newData);
      },
      deep: true
    }
  }
};
</script>
