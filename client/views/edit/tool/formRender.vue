<template>
  <div class="form-container">
    <div v-if="Object.keys(formData).length">
      <el-tabs>
        <el-tab-pane label="用户管理">
          <el-form label-width="80px" :model="formData" label-position="right">
            <template v-for="(item, index) in formData.config">
              <template v-if="item.type == undefined || item.type == 'input'">
                <el-col :span="item.col || 24" :key="index">
                  <el-form-item :label="item.label">
                    <el-input v-model="item.value"></el-input>
                  </el-form-item>
                </el-col>
              </template>
              <template v-if="item.type == 'colorPick'">
                <el-col :span="item.col || 24" :key="index">
                  <el-form-item :label="item.label">
                    <el-color-picker
                      v-model="item.value"
                      size="medium"
                    ></el-color-picker>
                  </el-form-item>
                </el-col>
              </template>
            </template>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="配置管理">配置管理</el-tab-pane>
      </el-tabs>
    </div>
    <div v-else>
      请在画板上选择需要编辑得元素
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      formData: state => state.editor.formData
    })
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
        this.arrToJson(newData.config);
      },
      deep: true
    }
  }
};
</script>
<style scoped lang="scss">
.form-container {
  padding: 0 20px;
  text-align: left;
}
</style>
<style>
.el-form-item__content {
  /* text-align: left; */
}
</style>
