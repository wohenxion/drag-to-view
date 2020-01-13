import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import INTERFACE from "@/http/api.js";
Vue.use(ElementUI);
Vue.config.productionTip = false;
window.INTERFACE = INTERFACE;
import filters from "./utils/filters.js";
Object.keys(filters).map(key => Vue.filter(key, filters[key]));
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
