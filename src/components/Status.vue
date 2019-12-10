<template>
  <div>
    <v-chip
      label
      class="ma-2"
      :class="connected ? 'green' : 'red'"
      text-color="white"
    >
      {{ name }}
      <v-icon v-if="connected" right>mdi-check</v-icon>
      <v-icon v-else right>mdi-close</v-icon>
    </v-chip>
  </div>
</template>

<script>
export default {
  props: ["name", "storeStateName"],
  computed: {
    connected() {
      return this.$store.state[this.storeStateName];
    }
  }
};
</script>

<style lang="scss" scoped></style>
