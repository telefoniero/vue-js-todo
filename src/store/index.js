import Vuex from "vuex";
import Vue from "vue";
import UI from "./modules/UI";
import data from "./modules/data";

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    UI,
    data
  }
});

export default store;
