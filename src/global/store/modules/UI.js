const UI = {
  namespaced: true,
  state: () => ({
    // if there were many elements, create module for each
    showPopup: false,
    isLoading: false,
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
    close({ commit, state }) {
      commit("CLOSE");
      if (!state.isLoading) document.body.style.overflow = "";
    },
    changeData({ commit }, payload) {
      commit("CHANGE_DATA", payload);
    },
    setLoading({ commit }) {
      document.body.style.overflow = "hidden";
      commit("SET_LOADING");
    },
    unsetLoading({ commit }) {
      commit("UNSET_LOADING");
      document.body.style.overflow = "";
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
    },
    SET_LOADING(state) {
      state.isLoading = true;
    },
    UNSET_LOADING(state) {
      state.isLoading = false;
    }
  }
};

export default UI;
