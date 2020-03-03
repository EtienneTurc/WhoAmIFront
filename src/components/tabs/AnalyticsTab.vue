<template>
  <v-card flat tile :loading="isLoading" class="card">
    <v-card-text v-if="!isLoading">{{ result }}</v-card-text>
    <v-card-text v-else>
      <p>Nous calculons vos résultats. Cela ne prendra encore que quelques secondes !</p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    result: {},
    isLoading: true
  }),
  methods: {
    getAnalyticsResults: function() {
      this.isLoading = true;
      this.$http
        .get(process.env.VUE_APP_API_URL + "/simpleAnalytics")
        .then(res => {
          this.result = res.data.result;
          this.isLoading = false;
        });
    }
  },
  created: function() {
    this.getAnalyticsResults();
  }
};
</script>

<style lang="scss" scoped></style>
