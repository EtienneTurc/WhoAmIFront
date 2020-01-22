import Vue from "vue";
import vuetify from "./plugins/vuetify";
import router from "./router/router";
import axios from "axios";
import VueAxios from "vue-axios";
import TwitterFeed from "vuejs-twitter-feed";


Vue.use(TwitterFeed);
Vue.use(require('vue-cookies'))


import {
	store
} from "./store/index"

import App from "./App.vue";

axios.interceptors.response.use((response) => {
	return response;
}, function (error) {
	// Do something with response error
	if (error.response.status === 401) {
		router.replace('/login');
	}
	return Promise.reject(error.response);
});

axios.defaults.withCredentials = true

Vue.use(VueAxios, axios);

Vue.filter("prettyName", function (name) {
	let string = name.toLowerCase();
	return string.charAt(0).toUpperCase() + string.slice(1);
});

new Vue({
	router,
	vuetify,
	render: h => h(App),
	store,
}).$mount("#app");
