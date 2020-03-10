<template>
  <div>
    <v-list dense>
      <div class="header">
        <v-subheader>NAVIGATION</v-subheader>
        <button @click="$store.commit('SET_DRAWER_STATE', false)">
          <v-icon color="secondary">mdi-close</v-icon>
        </button>
      </div>
      <v-list-item-group>
        <v-list-item v-scroll-to="'#idSection'">
          <v-list-item-content class="pl-5">
            <v-list-item-title v-text="'Carte d\'identité web'"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-scroll-to="'#dashboardSection'">
          <v-list-item-content class="pl-5">
            <v-list-item-title v-text="'Dashboard'"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-scroll-to="'#mapSection'">
          <v-list-item-content class="pl-5">
            <v-list-item-title v-text="'Données spatiales'"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-divider></v-divider>
    <v-list dense>
      <v-subheader>CONNEXIONS</v-subheader>
      <v-list-item-group>
        <ConnexionIndicator service="Google" :connected="$store.getters.googleConnected"></ConnexionIndicator>
        <ConnexionIndicator service="Facebook" :connected="false" :available="false"></ConnexionIndicator>
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