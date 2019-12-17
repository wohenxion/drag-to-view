import Template from "./src/index.vue";

const install = function(Vue) {
  Vue.component(Template.name, Template);
};

// 检测到 Vue 才执行，毕竟我们是基于 Vue 的
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Template
};
