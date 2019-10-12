import Vue from 'vue'
import vuetify from './plugins/vuetify';
import router from './router/router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

import App from './App.vue'

// Vue.use(vuetify, { iconfont: 'mdi' })


new Vue({
	router,
	vuetify,
	render: h => h(App)
}).$mount('#app')
