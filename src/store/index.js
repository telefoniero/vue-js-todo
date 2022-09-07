import { createStore } from "vuex";
import UI from "./modules/UI";
import data from "./modules/data";

const store = createStore({
  modules: {
    UI,
    data
  }
});

export default store;
