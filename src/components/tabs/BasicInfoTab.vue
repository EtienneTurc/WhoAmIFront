<template>
  <v-card flat tile :loading="!loaded" class="card">
    <v-card-text v-if="loaded">
      <v-flex xs5>
        <b>Last name</b>
        <br />
        <span>{{ people.lastName | prettyName }}</span>
      </v-flex>
      <v-flex xs5>
        <b>First name</b>
        <br />
        <span>{{ people.firstName | prettyName }}</span>
      </v-flex>

      <v-flex xs5>
        <b>Adresses mail</b>
        <template v-for="mail in people.mails">
          <p :key="mail">{{ mail }}</p>
        </template>
      </v-flex>
      <v-flex xs5>
        <b>Adresses</b>
        <template v-for="address in people.addresses">
          <p :key="address">{{ address }}</p>
        </template>
      </v-flex>
      <v-flex xs5>
        <b>Calendar events found</b>
        <br />
        <span>{{ this.events.number }}</span>
      </v-flex>
      <v-flex xs5>
        <b>Date of birth</b>
        <br />
        <span>{{ this.people.birthDate }}</span>
      </v-flex>
    </v-card-text>
  </v-card>
</template>

<script>
import utils from "../../utils/utils";

export default {
  data: () => ({
    events: {},
    mails: {},
    people: {},
    user_info: {},
    loaded: false
  }),
  methods: {
    getSimpleAnalytics: function() {
      this.$http
        .get(process.env.VUE_APP_API_URL + "/google/", {
          headers: utils.getHeaders(this)
        })
        .then(res => {
          this.people = res.data.people;
          this.events = res.data.calendar;
          this.mails = res.data.gmail;
          this.loaded = true;
          console.log(this.people);
          console.log(this.events);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created: function() {
    this.getSimpleAnalytics();
  }
};
</script>
