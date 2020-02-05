<template>
  <v-row>
    <a @click="goToResults">
      <span class="app-name">WhoAm.io</span>
    </a>
    <v-spacer></v-spacer>
    <span class="menu-item">
      <v-btn text class="white--text" @click="goToAbout">About us</v-btn>
    </span>
    <span class="menu-item">
      <v-btn text class="white--text" @click="goToContact">Contact</v-btn>
    </span>
    <span class="menu-item log-out">
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn color="primary" class="white--text" v-on="on" @click="logout">Log out</v-btn>
        </template>
        <span>Log me out from all external accounts</span>
      </v-tooltip>
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
      this.$store.commit("unsetTokenGoogle");
      this.$router.push("login");
    },
    goToAbout() {
      this.$router.push("About");
    },
    goToContact() {
      this.$router.push("Contact");
    },
    goToResults() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Fugaz+One&display=swap");

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
