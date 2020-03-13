<template>
  <v-list-item class="pa-0" inactive>
    <v-list-item-content>
      <div>
        <v-row class="px-5">
          <v-chip :outlined="!connected" class="secondary">
            <v-icon v-if="connected" color="white">mdi-check-circle</v-icon>
            <v-icon v-else color="secondary">mdi-close-circle</v-icon>
            {{service}}
          </v-chip>
          <v-spacer></v-spacer>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <div v-on="on">
                <v-btn
                  @click="disconnect"
                  v-if="connected"
                  small
                  color="danger white--text"
                >Supprimer</v-btn>
                <v-btn
                  v-else
                  small
                  color="green white--text"
                  :disabled="!available"
                  @click="login"
                >Connecter</v-btn>
              </div>
            </template>
            <span v-if="!available">Cette fonctionnalité sera bientôt disponible !</span>
            <span v-else-if="!connected">Cliquer pour utiliser ce service !</span>
            <span v-else>Cliquer pour vous déconnecter de ce service</span>
          </v-tooltip>
        </v-row>
      </div>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
import { login, logOut } from "../utils/login";

export default {
  props: {
    service: {
      type: String,
      required: true
    },
    connected: {
      type: Boolean,
      required: true
    },
    available: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  methods: {
    login: function() {
      login([`${this.service}`], this);
    },
    disconnect: async function() {
      await logOut([this.service.toLowerCase()], this);
      await this.$store.dispatch("GET_CONNEXIONS_STATUS");
      await this.$store.dispatch("SYNC_DATA");
    }
  }
};
</script>