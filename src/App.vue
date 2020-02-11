<template>
  <v-app class="app">
    <v-app-bar app class="menu elevation-6 secondary">
      <Menu></Menu>
    </v-app-bar>

    <v-content>
      <v-row class="page-content">
        <v-col cols="2" class="status">
          <StatusList></StatusList>
        </v-col>
        <v-col>
          <router-view class="nav-view elevation-6" />
        </v-col>
        <!-- <v-col cols="6" class="d-none d-lg-block">
          <v-container class="twitter elevation-6 pa-0">
            <TwitterFeed src="https://twitter.com/vuejs" data-link-color="#E79723"></TwitterFeed>
          </v-container>
        </v-col>-->
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
import StatusList from "@/components/StatusList";

export default {
  name: "App",
  components: {
    Menu,
    Footer,
    StatusList
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
.status {
  height: 3em;
}
.app {
  background-color: rgb(35, 39, 41);
}
</style>
