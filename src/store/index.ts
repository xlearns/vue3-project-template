import { createStore } from "vuex";

export default createStore({
  state: {
    error: false
  },
  getters: {
    getError: state => state.error
  },
  mutations: {
    changeError(state, val) {
      state.error = val;
    }
  },
  actions: {
    changeErrorAction(context, val) {
      context.commit("changeError", val);
    }
  },
  modules: {}
});
