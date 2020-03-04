import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    googleData: null,
    fetchingState: false
  },
  mutations: {
    setGoogleData(state, googleData) {
      state.googleData = googleData;
    },
    setFetchingState(state, fetchingState) {
      state.fetchingState = fetchingState;
    }
  }
});
