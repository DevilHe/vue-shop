import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import "@/assets/css/reset.css";
import "@/assets/js/rem.js";

// vant完全引入
import Vant from "vant";
import "vant/lib/index.css";

Vue.use(Vant);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
