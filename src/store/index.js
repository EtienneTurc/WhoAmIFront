import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		googleConnected: false,
		tokenGoogle: null
	},
	mutations: {
		connectGoogle(state) {
			state.googleConnected = true;
		},
		disconnectGoogle(state) {
			state.googleConnected = false;
		},
		setTokenGoogle(state, token) {
			state.tokenGoogle = token
		}
	},
	getters: {
		googleConnected: state => state.googleConnected
	}
})
