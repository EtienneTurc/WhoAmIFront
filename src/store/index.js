import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		tokenGoogle: null
	},
	mutations: {
		setTokenGoogle(state, token) {
			state.tokenGoogle = token;
		},
		unsetTokenGoogle(state) {
			state.tokenGoogle = null;
		}
	},
	getters: {
		googleConnected: state => state.googleConnected
	}
})
