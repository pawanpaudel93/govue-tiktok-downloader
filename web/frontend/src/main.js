import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios';
import vuetify from "./plugins/vuetify";
import Vuelidate from 'vuelidate';

Vue.use(Vuelidate)

axios.defaults.baseURL = process.env.VUE_APP_BASEURL
Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
