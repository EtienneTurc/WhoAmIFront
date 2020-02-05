<template>
  <v-card flat tile :loading="isLoading" class="card">
    <v-card-text>
      <v-flex xs5>
        <b>Last name</b>
        <br />
        <span v-if="user_info.names">{{ user_info.names[0].familyName | prettyName }}</span>
      </v-flex>
      <v-flex xs5>
        <b>First name</b>
        <br />
        <span v-if="user_info.names">{{ user_info.names[0].givenName | prettyName }}</span>
      </v-flex>

      <v-flex xs5>
        <b>Mail address</b>
        <br />
        <span v-if="user_info.emailAddresses">{{ user_info.emailAddresses[0].value }}</span>
      </v-flex>
      <v-flex xs5>
        <b>Calendar events found</b>
        <br />
        <span v-if="user_info.emailAddresses && !isLoading">{{ this.events.length }}</span>
      </v-flex>
    </v-card-text>
  </v-card>
</template>

<script>
import utils from "../../utils/utils";

export default {
  data: () => ({
    events: {},
    user_info: {},
    isLoading: true
  }),
  methods: {
    getSimpleAnalytics: function() {
      this.$http
        .get(process.env.VUE_APP_API_URL + "/analytics/simple", {
          headers: utils.getHeaders(this)
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getCalendar: function() {
      this.isLoading = true;
      this.$http
        .get(process.env.VUE_APP_API_URL + "/google/calendar", {
          headers: utils.getHeaders(this)
        })
        .then(res => {
          this.events = res.data;
          this.$router.replace({ query: {} });
          this.isLoading = false;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getPeopleInfo() {
      this.isLoading = true;
      this.$http
        .get(process.env.VUE_APP_API_URL + "/google/people", {
          headers: utils.getHeaders(this)
        })
        .then(res => {
          this.user_info = res.data.data;
          this.isLoading = false;
        })
        .catch(err => {
          return err;
        });
    }
  },
  created: function() {
    console.log("hey");
    this.getPeopleInfo();
    // this.getCalendar();
    this.getSimpleAnalytics();
  }
};
</script>
