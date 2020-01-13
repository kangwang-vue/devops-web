import Vue from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "ant-design-vue/dist/antd.css";
import "./styles/index.less";
import axios from 'axios';
axios.defaults.withCredentials=true

Vue.use(Antd);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
