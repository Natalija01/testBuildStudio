import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
import "slick-carousel";
import Vuelidate from "vuelidate";
import { i18n } from "@/plugins/i18n";
import { Trans } from "./plugins/Translation";

Vue.use(Vuelidate);
Vue.prototype.$i18nRoute = Trans.i18nRoute.bind(Trans);
import "./assets/style.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  store,

  render: h => h(App)
}).$mount("#app");
