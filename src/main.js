import Vue from "vue";
import vuetify from "./plugins/vuetify";
import router from "./router/router";
import axios from "axios";
import VueAxios from "vue-axios";
import TwitterFeed from "vuejs-twitter-feed";
import VueTyperPlugin from "vue-typer";

import "@/assets/style/_global.scss";

Vue.use(TwitterFeed);
Vue.use(require("vue-cookies"));

Vue.use(VueTyperPlugin);

import { store } from "./store/index";

import App from "./App.vue";

axios.interceptors.response.use(
  response => {
    return response;
  },
  function(error) {
    // Do something with response error
    if (error.response.status === 401) {
      router.replace("/login");
    }
    return Promise.reject(error.response);
  }
);

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.VUE_APP_API_URL;

Vue.use(VueAxios, axios);

Vue.filter("prettyName", function(name) {
  let string = name.toLowerCase();
  return string.charAt(0).toUpperCase() + string.slice(1);
});

Vue.filter("prettyDate", function(date) {
  let year = String(date.year);
  let month = String(date.month);
  let day = String(date.day);
  if (month.length == 1) {
    month = `0${month}`;
  }
  if (day.length == 1) {
    day = `0${day}`;
  }
  return `${day}/${month}/${year}`;
});

var VueScrollTo = require("vue-scrollto");
Vue.use(VueScrollTo);

new Vue({
  router,
  vuetify,
  render: h => h(App),
  store
}).$mount("#app");
