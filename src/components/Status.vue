<template>
  <div>
    <v-chip label class="ma-2" :class="connected ? 'connected' : 'disconnected'" text-color="white">
      {{ name }}
      <v-icon v-if="connected" right color="white">mdi-check</v-icon>
      <v-icon v-else right color="white">mdi-close</v-icon>
    </v-chip>
  </div>
</template>

<script>
export default {
  props: ["name", "storeStateName"],
  computed: {
    connected() {
      console.log(this.$store.state[this.storeStateName]);

      return this.$store.state[this.storeStateName];
    }
  }
};
</script>

<style lang="scss" scoped>
.disconnected {
  background-color: #772d2d !important;
}
</style>
