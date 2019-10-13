import Vue from 'vue'
import vuetify from './plugins/vuetify';
import router from './router/router'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.interceptors.response.use((res) => {
	if (res.data.token) {
		localStorage.setItem("token", JSON.stringify(res.data.token))
		delete res.data.token
	}
	return res;
}, err => {
	console.log(err)
	return Promise.reject(err);
});

Vue.use(VueAxios, axios)

import App from './App.vue'

// Vue.use(vuetify, { iconfont: 'mdi' })


new Vue({
	router,
	vuetify,
	render: h => h(App)
}).$mount('#app')
