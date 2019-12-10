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
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='3c6382' fill-opacity='0.05' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>
