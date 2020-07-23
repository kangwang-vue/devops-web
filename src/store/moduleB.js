const moduleA = {
    namespaced: true,
    state: {
        name: "sss",
    },
    mutations: {
        consoleString(state) {
            state.name = "AAA";
        }
    },
    // 类似直接在组件中computed处理，一般不需要用，就是类似计算属性的作用
    getters: {
        upper: state => {
            return String.upper(state.name);
        }
    },
    actions: {
        consoleString({ commit }) {
            commit('consoleString');
        }
    }

}
export default moduleA;