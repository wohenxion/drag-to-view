<template>
  <div class="ui-list-container">
    <h3>组件列表</h3>
    <div class="ui-group" v-for="(item, index) in uiArr" :key="index">
      <h4>{{ item.name }}</h4>
      <ul class="sidebar-ui-list">
        <template v-for="(item, index) in item.list">
          <li class="ui-list-item" :key="index" @click="addUI(item)">
            <i class="ui-icon" :class="item.icon"></i>
            <p>{{ item.name }}</p>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>
<script>
import dbModel from "@/views/DataModel";
import { mapState } from "vuex";
export default {
  data() {
    return {
      uiArr: [
        {
          name: "基础组件",
          list: [
            {
              code: "U000001",
              name: "组件1",
              icon: "el-icon-tableware"
            },
            {
              code: "U000001",
              name: "组件1",
              icon: "el-icon-tableware"
            },
            {
              code: "U000001",
              name: "组件1",
              icon: "el-icon-tableware"
            }
          ]
        },
        {
          name: "其他组件",
          list: [
            {
              code: "U000002",
              name: "组件2",
              icon: "el-icon-potato-strips"
            }
          ]
        }
      ]
    };
  },
  computed: {
    ...mapState({
      projectDataInit: state => state.editor.projectData
    })
  },
  methods: {
    addUI(item) {
      let elements = dbModel.getElementConfig();
      elements.code = item.code;
      elements.elName = item.name;
      this.projectDataInit.layouts[0].elements.push(elements);
      // this.updatePro(projectDataInit);
      this.$store.dispatch("editor/updateProjectData", this.projectDataInit);
      this.$store.dispatch("editor/updateID", elements.uid);
    }
  }
};
</script>
<style scoped lang="scss">
.ui-list-container {
  text-align: left;
  color: #333333;
  h3 {
    text-align: center;
    font-size: 18px;
    margin: 32px 0 10px;
  }
  .ui-group {
    padding: 10px;
    h4 {
      font-size: 16px;
      margin-bottom: 20px;
    }
  }

  .sidebar-ui-list {
    // display: flex;

    .ui-list-item {
      display: inline-block;
      width: 80px;
      font-size: 12px;
      text-align: center;
      padding: 2px 0;
      margin: 5px;
      border: 1px solid #dddddd;
      cursor: pointer;
      background: #f4f4f4;
      &:hover {
        border-color: #409eff;
        color: #409eff;
      }
      .ui-icon {
        font-size: 20px;
      }
    }
  }
}
</style>
