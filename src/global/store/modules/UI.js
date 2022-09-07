const UI = {
  namespaced: true,
  state: () => ({
    // if there were many elements, create module for each
    showPopup: false,
    // called todo because of specific task
    // in real project would be using named slots
    data: {
      // id: 1,
      title: "",
      completed: null
    }
  }),
  actions: {
    open({ commit }, data) {
      commit("OPEN");
      document.body.style.overflow = "hidden";
      commit("UPDATE_DATA", data);
    },
    close({ commit }) {
      commit("CLOSE");
      document.body.style.overflow = "";
    },
    changeData({ commit }, payload) {
      commit("CHANGE_DATA", payload);
    }
  },
  mutations: {
    OPEN(state) {
      state.showPopup = true;
    },
    CLOSE(state) {
      state.showPopup = false;
    },
    UPDATE_DATA(state, data) {
      state.data = { ...data }; // data is new object
    },
    CHANGE_DATA(state, data) {
      state.data = { ...state.data, ...data };
    }
  }
};

export default UI;
