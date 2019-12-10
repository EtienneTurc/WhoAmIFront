import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        googleConnected: false
    },
    mutations: {
        connectGoogle(state) {
            state.googleConnected = true;
        },
        disconnectGoogle(state) {
            state.googleConnected = false;
        }
    },
    getters: {
        googleConnected: state => state.googleConnected
    }
})