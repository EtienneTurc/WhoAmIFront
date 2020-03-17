<template>
  <v-row>
    <v-app-bar-nav-icon @click="$store.commit('SET_DRAWER_STATE', !$store.state.drawerState)"></v-app-bar-nav-icon>
    <a @click="$router.push('/')">
      <span class="app-name">
        <img src="../assets/img/logo.png" class="logo" />
      </span>
    </a>
    <v-spacer></v-spacer>
    <span class="menu-item log-out" v-if="$store.getters.connected">
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn class="danger white--text" v-on="on" @click="logout">Déconnexion</v-btn>
        </template>
        <span>Nous supprimerons immédiatement toutes les données collectées sur vos comptes</span>
      </v-tooltip>
    </span>
    <OriginIndicator class="origin-indicator"></OriginIndicator>
  </v-row>
</template>

<script>
import OriginIndicator from "@/components/utils/OriginIndicator";

export default {
  components: {
    OriginIndicator
  },
  methods: {
    logout() {
      this.$router.push("login");
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Fugaz+One&display=swap");

.origin-indicator {
  margin: 0;
  padding: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.header {
  border-bottom-style: solid;
}
.log-out {
  margin-right: 1em;
}
.v-center {
  margin-top: auto;
  margin-bottom: auto;
}
.menu-item {
  color: white;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 1em;
}
.app-name {
  height: 100%;
  margin-top: auto;
  margin-bottom: auto;
}
.logo {
  // margin-top: auto;
  // margin-bottom: 0;
  height: 80%;
  top: 50%;
  transform: translateY(-45%);
  position: absolute;
}
</style>
