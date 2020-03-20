import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import jQuery from "jquery";
import "slick-carousel";

import "./assets/style.scss";
window.$ = window.jQuery = jQuery;


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
