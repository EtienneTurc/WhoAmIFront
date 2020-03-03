<template>
  <v-container class="main-login">
    <div class="title">
      <p class="display-3">Log in</p>
      <v-divider></v-divider>
    </div>
    <p
      class="text-center font-italic font-weight-medium mb-10"
    >Have you ever wondered what the web knew about you?</p>
    <p
      class="text-center title font-weight-medium mb-10 primary--text"
    >Now, this is just one click away!</p>
    <v-layout align-center justify-center row fill-height>
      <v-btn large @click="loginGoogle">Log in with Google</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
import utils from "../utils/utils";

export default {
  data: () => ({}),
  methods: {
    loginGoogle: function() {
      localStorage.removeItem("token");
      this.$http
        .get(process.env.VUE_APP_API_URL + "/login/google")
        .then(res => {
          this.$store.commit("setGoogleConnectionState", true);
          window.location.replace(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style scoped>
.s-bg {
  background-color: #2980b9;
}

.is-fullheight {
  height: 100vh;
  width: 100vw;
}
.title {
  margin-bottom: 2em;
}
.main-login {
  padding: 3em;
}
</style>
