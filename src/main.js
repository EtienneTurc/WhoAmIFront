import Vue from "vue";
import vuetify from "./plugins/vuetify";
import router from "./router/router";
import axios from "axios";
import VueAxios from "vue-axios";
import TwitterFeed from "vuejs-twitter-feed";


Vue.use(TwitterFeed);


import {
    store
} from "./store/index"

import App from "./App.vue";

axios.interceptors.response.use(
    res => {
        if (res.data.token) {
            localStorage.setItem("token", JSON.stringify(res.data.token));
            delete res.data.token;
        }
        return res;
    },
    err => {
        return Promise.reject(err);
    }
);

Vue.use(VueAxios, axios);

Vue.filter("prettyName", function(name) {
    let string = name.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
});

new Vue({
    router,
    vuetify,
    render: h => h(App),
    store,
}).$mount("#app");