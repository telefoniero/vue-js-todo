const UI = {
  namespaced: true,
  state: () => ({
    // if there were many elements, create module for each
    showPopup: false,
    popupData: {}
  }),
  actions: {
    // just to keep tendency to avoid calling mutations straight
    open({ commit }, data) {
      commit("OPEN");
      commit("UPDATE_DATA", data);
    },
    close({ commit }) {
      commit("CLOSE");
    }
  },
  mutations: {
    OPEN({ showPopup }) {
      showPopup = true;
    },
    CLOSE({ showPopup }) {
      showPopup = false;
    },
    UPDATE_DATA({ popupData }, data) {
      popupData = data; // data is new object
    }
  }
};

export default UI;
