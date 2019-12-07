<template>
  <v-row>
    <span class="app-name">WhoAm.io</span>
    <v-spacer></v-spacer>
    <span class="menu-item">
      <v-btn text class="white--text">About us</v-btn>
    </span>
    <span class="menu-item">
      <v-btn text class="white--text">Contact</v-btn>
    </span>
    <span class="menu-item log-out">
      <v-btn class="secondary--text" @click="logout">Complete Log Out</v-btn>
    </span>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    loggedIn: false
  }),
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push("login");
    }
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Fugaz+One&display=swap');


.app-name {
  font-family: "Fugaz One", cursive;
  font-size: 3em;
  color: white;
  margin-left: 2em;
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
</style>
