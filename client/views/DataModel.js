import { createUUID } from "@common/uitls";
import { cloneDeep } from "lodash";
// 元素配置信息字段
let elementConfig = {
  uid: "",
  code: "",
  elName: "", // 组件名
  animations: [], // 动画
  events: [], // 事件
  data: [] // 表单配置
};
// 页面(布局)配置信息字段
let layoutConfig = {
  lid: "",
  name: "",
  elements: [],
  commonStyle: {
    backgroundColor: "",
    backgroundImage: "",
    backgroundSize: "cover"
  },
  config: {}
};
// 项目配置信息字段
let projectConfig = {
  pid: "",
  name: "",
  title: "未命名场景",
  description: "我用夸克可视化编辑器做了一个超酷炫的H5，快来看看吧。",
  coverImage: "",
  auther: "",
  script: "",
  layouts: []
};

let getElementConfig = () => {
  let elementData = cloneDeep(elementConfig);
  // let config = {};
  elementData.uid = createUUID();
  return elementData;
};

let getPageConfig = function() {
  layoutConfig.lid = 12;
  return {
    ...cloneDeep(layoutConfig)
  };
};

let getProjectConfig = function() {
  let project = cloneDeep(projectConfig);
  project.pid = createUUID();
  let onePage = getPageConfig();
  project.layouts.push({
    ...onePage
  });
  return { ...project };
};
export default {
  elementConfig,
  layoutConfig,
  projectConfig,
  getElementConfig,
  getPageConfig,
  getProjectConfig
};
