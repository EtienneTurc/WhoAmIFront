<template>
  <v-row>
    <v-app-bar-nav-icon @click="$store.commit('setDrawerState')"></v-app-bar-nav-icon>
    <a @click="$router.push('/')">
      <span class="app-name">
        <img src="../assets/img/logo.png" class="logo" />
      </span>
    </a>
    <v-spacer></v-spacer>
    <span class="menu-item log-out" v-if="$store.state.connected">
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn color="#772D2D" class="white--text" v-on="on" @click="logout">Déconnexion</v-btn>
        </template>
        <span>Me déconnecter de tous mes comptes</span>
      </v-tooltip>
    </span>
  </v-row>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.commit("disconnectGoogle");
      this.$router.push("login");
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Fugaz+One&display=swap");

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
