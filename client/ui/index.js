const U000001 = () => import("./U000001/index.vue");
const U000002 = () => import("./U000002/index.vue");
const U000003 = () => import("./U000003/index.vue");
const components = {
  U000001,
  U000002,
  U000003
};

// // 定义 install 方法，接收 Vue 作为参数
// const install = function(Vue) {
//   // 判断是否安装，安装过就不继续往下执行
//   if (install.installed) return;
//   install.installed = true;
//   // 遍历注册所有组件
//   Object.keys(components).map(component =>
//     Vue.component(component.name, component)
//   );
// };

// // 检测到 Vue 才执行，毕竟我们是基于 Vue 的
// if (typeof window !== "undefined" && window.Vue) {
//   install(window.Vue);
// }
export { components };

// export default {
//   install
//   // 所有组件，必须具有 install，才能使用 Vue.use()
// };
