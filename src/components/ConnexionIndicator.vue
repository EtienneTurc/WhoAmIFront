<template>
  <v-list-item class="pa-0" inactive>
    <v-list-item-content>
      <div>
        <v-row class="px-5">
          <v-chip :outlined="!connected" class="primary">
            <v-icon v-if="connected" color="white">mdi-check-circle</v-icon>
            <v-icon v-else color="primary">mdi-close-circle</v-icon>
            {{service}}
          </v-chip>
          <v-spacer></v-spacer>
          <v-btn @click="disconnect" v-if="connected" small color="danger white--text">Supprimer</v-btn>
          <v-btn
            v-else
            small
            color="green white--text"
            :disabled="!available"
            @click="login"
          >Connecter</v-btn>
        </v-row>
      </div>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
import { login } from "../utils/utils";

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
      login[`${this.service}`](this);
    },
    disconnect: function() {
      this.$store.dispatch(`REMOVE_${this.service.toUpperCase()}_DATA`);
    }
  }
};
</script>