import { cloneDeep } from "lodash";
const edit = {
  namespaced: true,
  state: {
    fontSize: 12,
    projectStyle: {},
    projectData: {},
    activeElementUUID: "",
    formData: {},
    formObj: {}
  },
  mutations: {
    setFont(state, data) {
      state.fontSize = data;
    },
    setProjectStyle(state, data) {
      let arr = state.projectData.layouts[0].elements;
      arr.forEach(item => {
        if (item.uid == state.activeElementUUID) {
          item.config = data;
        }
      });
    },
    setUid(state, data) {
      state.activeElementUUID = data;
    },
    setProjectData(state, data) {
      state.projectData = data;
    },
    setFormData(state, data) {
      state.formData = data;
    }
  },
  actions: {
    updateFont({ commit }, data) {
      commit("setFont", data);
    },
    updateProjectStyle({ commit }, data) {
      commit("setProjectStyle", data);
    },
    updateProjectData({ commit }, data) {
      // console.log(data);
      commit("setProjectData", data);
    },
    updateID({ commit, state }, id) {
      commit("setUid", id);
      if (!id) {
        commit("setFormData", {});
        return;
      }
      let curComponentData = {};
      curComponentData = state.projectData.layouts[0].elements.find(v => {
        return v.uid === id;
      });
      import(`@/ui/${curComponentData.code}/form.js`).then(res => {
        let formObj = cloneDeep(res.default);
        let arr = formObj.config;
        arr.forEach(element => {
          if (curComponentData.config[element.name]) {
            element.value = curComponentData.config[element.name];
          }
        });
        commit("setFormData", formObj);
      });
    }
  },
  getters: {
    // activeElement(state) {
    //   if (state.activeElementUUID) {
    //     console.log("act", state.activeElementUUID);
    //     // let arr = [];
    //     return curComponentData;
    //   }
    // }
  }
};

export default edit;
