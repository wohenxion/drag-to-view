<template>
  <div class="form-container">
    <div v-if="Object.keys(formData).length">
      <el-tabs>
        <template v-for="(item, index) in formData.tabs">
          <el-tab-pane :label="item.label" :key="index" class="panel-cont">
            <el-form label-width="80px" :model="item" label-position="left">
              <template v-for="(item, index) in item.items">
                <el-col :key="index">
                  <h2 class="list-title">{{ item.label }}</h2>
                  <el-col v-for="(item, index) in item.items" :key="index">
                    <formCom :item="item"></formCom>
                  </el-col>
                </el-col>
              </template>
            </el-form>
          </el-tab-pane>
        </template>
      </el-tabs>
    </div>
    <div v-else class="panel-none">
      请在画板上选择需要编辑得元素
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
// const test = () => import("./test");
// import formComponent from "./formComponents/index";
import formCom from "./formComponent";
export default {
  computed: {
    ...mapState({
      formData: state => state.editor.formData
    })
  },
  components: {
    formCom
  },
  methods: {}
};
</script>
<style scoped lang="scss">
.form-container {
  padding: 0 20px;
  text-align: left;
  .panel-cont {
    padding-top: 15px;
  }
}
.list-title {
  font-size: 18px;
  margin-bottom: 15px;
  padding-bottom: 10px;
  // border-bottom: 1px dashed #dcdfe6;
}
.panel-none {
  font-size: 16px;
  text-align: center;
  padding-top: 60px;
  color: #a7a9a7;
}
</style>
