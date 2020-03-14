<template>
  <div>
    <v-list dense>
      <v-subheader>CONNEXIONS</v-subheader>
      <v-list-item-group>
        <ConnexionIndicator service="Google" :connected="$store.state.connexions.google"></ConnexionIndicator>
        <ConnexionIndicator service="Facebook" :connected="$store.state.connexions.facebook"></ConnexionIndicator>
        <ConnexionIndicator service="LinkedIn" :connected="false" :available="false"></ConnexionIndicator>
      </v-list-item-group>
    </v-list>
  </div>
</template>
    
<script>
import ConnexionIndicator from "@/components/ConnexionIndicator";

export default {
  components: {
    ConnexionIndicator
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 16px;
}
</style>