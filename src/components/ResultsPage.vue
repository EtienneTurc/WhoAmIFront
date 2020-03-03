<template>
  <div>
    <v-container fluid align-content-center class="main">
      <IDSection></IDSection>
      <MapSection></MapSection>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Fugaz+One&display=swap");

.main {
  padding: 0;
  margin: 0;
}
.title {
  margin-bottom: 2em;
}
</style>

<script>
import utils from "../utils/utils";
import BasicInfoTab from "./tabs/BasicInfoTab";
import AnalyticsTab from "./tabs/AnalyticsTab";
import IDSection from "./sections/IDSection";
import MapSection from "./sections/MapSection";

export default {
  components: {
    BasicInfoTab,
    AnalyticsTab,
    IDSection,
    MapSection
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
