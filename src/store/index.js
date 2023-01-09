import { createStore } from "vuex";

export default createStore({
  state: {
    open:false,
    nav:false
  },
  getters: {},
  mutations: {
    change (state) {
      state.nav= !state.nav
    },
  },
  actions: {},
  modules: {},
});
