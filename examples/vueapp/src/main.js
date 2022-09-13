import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import { plugins } from "../../../dist/mcsdk";
// const { VueAccessControl } = plugins;

// import { VueAccessControl } from "../../../dist/plugins";
import { VueAccessControl } from "npmjs-package/dist/plugins";

Vue.config.productionTip = false;
Vue.use(VueAccessControl, { router });
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
