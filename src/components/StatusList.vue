<template>
  <v-card>
    <v-card-title>Connections:</v-card-title>

    <v-card-text>
      <v-divider></v-divider>
      <Status name="Google" storeStateName="googleData"></Status>
      <Status name="Facebook" storeStateName="tokenGoogle"></Status>
      <Status name="LinkedIn" storeStateName="tokenGoogle"></Status>
    </v-card-text>
  </v-card>
</template>

<script>
import Status from "@/components/Status.vue";

export default {
  components: { Status }
};
</script>

<style lang="scss" scoped>
.status-main {
  background-color: white;
}
</style>
