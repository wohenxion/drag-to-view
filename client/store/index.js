import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import editor from "./modules/editor";
export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    editor
  }
});
