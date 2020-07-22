import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    isHome: true
  },
  mutations: {
    increment(state) {
      state.count++
    },
    changeIsHome(state) {
      state.isHome = false
    }

  },
  getters: {
    add: state => {
      return state.count++;
    }
  },
  actions: {},
  modules: {}
});
