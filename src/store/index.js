import Vue from "vue";
import Vuex from "vuex";
import moduleA from "./moduleA";
import moduleB from "./moduleB";
import moduleC from "./moduleC";
import moduleD from "./moduleD";
import test from "./test";

Vue.use(Vuex);
const store = new Vuex.Store({
    modules: {
        moduleA,
        moduleB,
        moduleC,
        moduleD,
        test
    }
})
export default store;