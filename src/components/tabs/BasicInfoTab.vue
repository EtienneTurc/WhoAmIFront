<template>
  <v-card flat tile :loading="$store.state.fetchingState == true" class="card">
    <v-card-text v-if="$store.state.fetchingState == false">
      <v-flex xs5>
        <b>Last name</b>
        <br />
        <span>{{ this.$store.state.googleData.people.lastName | prettyName }}</span>
      </v-flex>
      <v-flex xs5>
        <b>First name</b>
        <br />
        <span>{{ this.$store.state.googleData.people.firstName | prettyName }}</span>
      </v-flex>

      <v-flex xs5>
        <b>Adresses mail</b>
        <template v-for="mail in this.$store.state.googleData.people.mails">
          <p :key="mail">{{ mail }}</p>
        </template>
      </v-flex>
      <v-flex xs5>
        <b>Adresses</b>
        <template v-for="address in this.$store.state.googleData.people.addresses">
          <p :key="address">{{ address }}</p>
        </template>
      </v-flex>
      <v-flex xs5>
        <b>Calendar events found</b>
        <br />
        <span>{{ this.$store.state.googleData.calendar.number }}</span>
      </v-flex>
      <v-flex xs5>
        <b>Date of birth</b>
        <br />
        <span>{{ this.$store.state.googleData.people.birthDate }}</span>
      </v-flex>
    </v-card-text>
  </v-card>
</template>

<script>
import utils from "../../utils/utils";

export default {};
</script>
