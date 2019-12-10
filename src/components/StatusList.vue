<template>
  <v-card>
    <v-card-title>Connections:</v-card-title>

    <v-card-text>
      <v-divider></v-divider>
      <Status name="Google"></Status>
    </v-card-text>
  </v-card>
</template>

<script>
import Status from "@/components/Status.vue";

export default {
  data: () => ({}),
  components: { Status }
};
</script>

<style lang="scss" scoped>
.status-main {
  background-color: white;
}
</style>