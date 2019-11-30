const edit = {
  namespaced: true,
  state: {
    fontSize: 12,
    projectStyle: {},
    projectData: {},
    activeElementUUID: "",
    formData: []
  },
  mutations: {
    setFont(state, data) {
      state.fontSize = data;
    },
    setProjectStyle(state, data) {
      console.log("data", data, state.activeElementUUID);
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
      commit("setProjectData", data);
    },
    updateID({ commit, state }, id) {
      commit("setUid", id);
      let curComponentData = {};
      curComponentData = state.projectData.layouts[0].elements.find(v => {
        return v.uid === id;
      });
      import(`@/ui/${curComponentData.code}/form.js`).then(res => {
        res.default.config.forEach(element => {
          element.value = curComponentData.config[element.name];
        });
        commit("setFormData", res.default.config);
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
