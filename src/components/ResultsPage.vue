<template>
  <div>
    <v-container fluid align-content-center class="main">
      <div class="title">
        <p class="display-3">Your results</p>
        <v-divider></v-divider>
      </div>
      <v-layout justify-center row>
        <v-tabs
          class="elevation-6"
          background-color="secondary"
          dark
          :grow="true"
        >
          <v-tabs-slider color="orange"></v-tabs-slider>
          <v-tab :href="'#tab_basic_info'">Basic information</v-tab>
          <v-tab :href="'#tab_analytics'">Analytics</v-tab>

          <v-tab-item :value="'tab_basic_info'">
            <BasicInfoTab></BasicInfoTab>
          </v-tab-item>

          <v-tab-item :value="'tab_analytics'">
            <AnalyticsTab></AnalyticsTab>
          </v-tab-item>
        </v-tabs>
      </v-layout>
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

export default {
  components: {
    BasicInfoTab,
    AnalyticsTab
  }
};
</script>
