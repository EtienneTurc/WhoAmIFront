<template>
  <v-app class="app">
    <v-app-bar app class="menu elevation-6 secondary">
      <Menu></Menu>
    </v-app-bar>

    <v-content>
      <v-row class="page-content">
        <v-col>
          <router-view class="nav-view elevation-6" />
        </v-col>
        <v-col cols="3" class="d-none d-lg-block">
          <v-container class="twitter elevation-6">
            <TwitterFeed
              src="https://twitter.com/paul_azoulai/timelines/1203370242132598784"
              data-link-color="#E79723"
            ></TwitterFeed>
          </v-container>
        </v-col>
      </v-row>
    </v-content>
    <v-footer app class="footer" color="secondary">
      <Footer></Footer>
    </v-footer>
  </v-app>
</template>

<script>
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Menu: Menu,
    Footer: Footer
  }
};
</script>

<style lang="scss" scoped>
.nav-view {
  width: 100%;
  //   border: solid 1px;
  background-color: white;
}

.page-content {
  margin: 0 5em;
  height: 100%;
}

.twitter {
  background-color: white;
  height: 49em;
  overflow: scroll;
}
.col {
  margin: 15px;
}
.menu {
  padding: 0;
}
</style>
