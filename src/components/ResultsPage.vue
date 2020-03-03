<template>
  <div>
    <v-container fluid align-content-center class="main">
      <div class="title">
        <p class="display-3">Vos résultats</p>
        <v-divider></v-divider>
      </div>

      <IDTab></IDTab>
      <BasicInfoTab></BasicInfoTab>

      <AnalyticsTab></AnalyticsTab>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Fugaz+One&display=swap");

.main {
  padding: 4em;
}
.title {
  margin-bottom: 2em;
}
</style>

<script>
import utils from "../utils/utils";
import BasicInfoTab from "./tabs/BasicInfoTab";
import AnalyticsTab from "./tabs/AnalyticsTab";
import IDTab from "./tabs/IDTab";

export default {
  components: {
    BasicInfoTab,
    AnalyticsTab,
    IDTab
  },
  methods: {
    getGoogleData: function() {
      this.$store.commit("setFetchingState", true);
      this.$http
        .get(process.env.VUE_APP_API_URL + "/google/", {
          headers: utils.getHeaders(this)
        })
        .then(res => {
          this.$store.commit("setGoogleData", res.data);
          this.$store.commit("setFetchingState", false);
          if (
            this.$store.state.awaitingGoogleConnection == true &&
            this.$store.state.GoogleData != null
          ) {
            this.$store.commit("setGoogleConnectionState", false);
          }
        })
        .catch(err => {
          return err;
        });
    }
  },
  created() {
    this.getGoogleData();
  }
};
</script>
