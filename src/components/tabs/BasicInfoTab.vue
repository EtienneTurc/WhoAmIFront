<template>
  <v-card flat tile :loading="$store.state.fetchingState == true" class="card">
    <v-card-text v-if="$store.state.fetchingState == false">
      <v-flex xs5>
        <b>Evènements calendrier</b>
        <br />
        <span>{{ this.$store.state.googleData.calendar.number }}</span>
      </v-flex>
    </v-card-text>
  </v-card>
</template>

<script>
import utils from "../../utils/utils";

export default {
  computed: {}
};
</script>
