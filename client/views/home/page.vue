<template>
  <div class="page-list-wrap">
    <ul class="card-wrap">
      <li class="list-item" v-for="i in 1" :key="i">
        <div class="img-card">
          <ul class="img-card-menu">
            <el-tooltip content="编辑" placement="top">
              <li>
                <i class="el-icon-s-open"></i>
              </li>
            </el-tooltip>
            <el-tooltip content="预览" placement="top">
              <li
                @click="$router.push({ name: 'edit', params: { id: '123' } })"
              >
                <i class="el-icon-s-platform"></i>
              </li>
            </el-tooltip>
            <el-tooltip content="删除" placement="top">
              <li>
                <i class="el-icon-warning"></i>
              </li>
            </el-tooltip>
          </ul>
          <!-- <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class="image"
        /> -->
          <i class="el-icon-s-help icon-bg"></i>
        </div>
        <div class="card-foot">
          <p>好吃的汉堡</p>
          <div class="bottom clearfix">
            <time class="time">{{ new Date().toLocaleDateString() }}</time>
            <el-button type="text" class="button">操作按钮</el-button>
          </div>
        </div>
      </li>
      <li class="list-item" @click="handleCreatePage">
        <div class="item-card create">
          <div class="item-create-cont">
            <i class="el-icon-plus"></i>
            <p>创建新页面</p>
          </div>
        </div>
      </li>
    </ul>
    <el-dialog
      title="新增页面"
      width="600px"
      :close-on-click-modal="false"
      center
      :visible.sync="dialogFormVisible"
      style="text-align:left"
    >
      <el-form :model="form" :label-width="formLabelWidth">
        <el-form-item label="标题：">
          <el-input
            v-model="form.name"
            autocomplete="off"
            maxlength="12"
            show-word-limit
          ></el-input>
        </el-form-item>
        <el-form-item label="描述：">
          <el-input
            type="textarea"
            v-model="form.desc"
            autocomplete="off"
            maxlength="30"
            show-word-limit
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formLabelWidth: "100px",
      form: {
        name: "",
        desc: ""
      },
      dialogFormVisible: false
    };
  },
  methods: {
    handleCreatePage() {
      console.log(1);
      this.dialogFormVisible = true;
      // this.$router.push({ name: "edit", params: { id: "123" } });
    }
  }
};
</script>
<style scoped lang="scss">
.time {
  font-size: 13px;
  color: #999;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.card-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  min-width: 1000px;
}
.list-item {
  width: 230px;
  height: 320px;
  margin: 10px;
  border-radius: 8px;

  background-color: #ffffff;
  transition: transform 0.1s cubic-bezier(0.65, 0.05, 0.36, 1);
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 0px 12px 3px #adadad;
    .item-card.create {
      color: #25a589;
      border: 1px solid #d1e7e2;
    }
    .img-card {
      .img-card-menu {
        opacity: 1;
      }
    }
  }
  .item-card {
    height: 100%;
    &.create {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid transparent;
      .el-icon-plus {
        font-size: 40px;
      }
    }
  }
  .card-foot {
    padding: 14px;
    text-align: left;
    > p {
      padding-bottom: 8px;
    }
  }
  .img-card {
    border-radius: 8px 8px 0 0;
    width: 230px;
    height: 230px;
    overflow: hidden;
    position: relative;
    background: #cecece;
    // display: flex;
    .icon-bg {
      font-size: 154px;
      color: #fff;
      line-height: 230px;
    }

    .img-card-menu {
      display: flex;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
      justify-content: center;
      align-items: center;
      background-color: rgba(99, 99, 99, 0.5);
      > li {
        font-size: 20px;
        width: 36px;
        height: 36px;
        line-height: 36px;
        margin: 6px;
        background-color: #fff;
        border-radius: 50%;
        cursor: pointer;
        &:hover {
          background-color: #409eff;
          color: #ffffff;
        }
      }
    }
  }
}
</style>
