<template>
  <v-chip label class="ma-2" :class="connected ? 'green' : 'red'" text-color="white">
    {{name}}
    <v-icon v-if="connected" right>mdi-check</v-icon>
    <v-icon v-else right>mdi-close</v-icon>
  </v-chip>
</template>

<script>
export default {
  props: ["name"],
  data: () => ({
    connected: true
  }),
  methods: {
    connect: function() {
      console.log("connected");
      this.connected = true;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>