<template>
  <div class="ui-list-container">
    <h3>组件列表</h3>
    <div
      class="ui-group"
      v-for="(item, index) in uiArr"
      :key="index + item.name"
    >
      <h4>{{ item.name }}</h4>
      <ul class="sidebar-ui-list">
        <draggable
          v-model="uiArr[index].list"
          :group="{ name: 'people', pull: 'clone', put: false }"
          :clone="cloneDog"
          @end="drag = false"
        >
          <template v-for="(item, index) in item.list">
            <li class="ui-list-item" :key="index" @click="addUI(item)">
              <i class="ui-icon" :class="item.icon"></i>
              <p>{{ item.name }}</p>
            </li>
          </template>
        </draggable>
      </ul>
    </div>
  </div>
</template>
<script>
// import dbModel from "@/views/DataModel";
import { mapState } from "vuex";
import { createUUID } from "@common/uitls";
const draggable = () => import("vuedraggable");
// import draggable from 'vuedraggable'
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
    cloneDog(item) {
      return {
        uid: createUUID(),
        code: item.code,
        elName: item.name, // 组件名
        animations: [], // 动画
        events: [], // 事件
        config: {
          name: item.name,
          tabs: []
        } // 表单配置
      };
    }
  },
  components: {
    draggable
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
      cursor: move;
      display: inline-block;
      width: 75px;
      font-size: 12px;
      text-align: center;
      padding: 2px 0;
      margin: 5px;
      border: 1px solid #dddddd;
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
