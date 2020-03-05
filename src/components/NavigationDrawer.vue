<template>
  <div>
    <v-list dense>
      <v-subheader>NAVIGATION</v-subheader>
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
            <v-list-item-title v-text="'Carte'"></v-list-item-title>
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