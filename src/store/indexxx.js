import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state, params) {
      debugger
      state.count = state.count + "123" + params;
    },
    join(state) {
      state.count = `王康是个老母猪${state.count}`
    },
    clear(state) {
      state.count = 0
    },
    reverse(state) {
      state.count = [1,2,3,4,5,6,7].reverse(item=>item)
    },
    forEach(state){
      let sum = 0;
      state.count = [100,200,300,400,500,600].forEach(item => { sum += item })
      console.log(sum);
    },
    find(state){
      state.count = `你个瓜批有${[100,200,300,400].find(item => item ===200)}斤`
    },
    concat(state){
      let a = ['你是一条猪，'];
      state.count = a.concat('又是一只老母鸡');
    },
    sort(state){
      let arr = [12,35,455,87,64,123,54,76,64,465];
      state.count = arr.sort( (m, n)=> {
        if (m < n) return -1
        else if (m > n) return 1
        else return 0
       });
    },
  },
  // 类似直接在组件中computed处理，一般不需要用，就是类似计算属性的作用
  getters: {
    add: state => {
      return state.count + 10;
    }
  },
  actions: {
    increment({ commit }, params) {
      debugger
      commit('increment', params.name);
    },
    join({ commit }) {
      commit('join');
    },
    clear({ commit }) {
      commit('clear');
    },
    reverse({ commit }) {
      commit('reverse');
    },
    forEach({ commit }) {
      commit('forEach');
    },
    find({ commit }) {
      commit('find');
    },
    concat({ commit }) {
      commit('concat');
    },
    sort({ commit }) {
      commit('sort');
    }
  }
});

// state和getters都是负责get获取，都可以在页面中拿到vuex的值  (获取get)
// mutations同步处理，就是在页面中执行commit，调用vuex中mutations中的方法   (设置set)


// 同步：页面commit=>触发mutations=>设置vuex中state值  直接pass掉
// 异步(定时器，promise，async/await,回调)：页面dispatch=>触发actions=>触发mutations=>设置vuex中state值