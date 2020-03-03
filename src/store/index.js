import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    googleConnected: false,
    googleData: null,
    fetchingState: false
  },
  mutations: {
    setGoogleData(state, googleData) {
      state.googleData = googleData;
    },
    disconnectGoogle(state) {
      state.googleData = null;
      state.googleConnected = false;
    },
    connectGoogle(state) {
      state.googleConnected = true;
    },
    setFetchingState(state, fetchingState) {
      state.fetchingState = fetchingState;
    }
  }
});
