import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { firestorePlugin } from "vuefire";
import i18n from '@/plugins/i18n';
import FlagIcon from 'vue-flag-icon';
import router from './router'
Vue.use(FlagIcon);
Vue.use(firestorePlugin);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  i18n,
  render: (h) => h(App)
}).$mount("#app");
