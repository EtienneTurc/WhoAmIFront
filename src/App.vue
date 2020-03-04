<template>
  <v-app class="app">
    <v-app-bar app dark class="elevation-6 primary" :value="$route.name !== 'login'">
      <Menu></Menu>
    </v-app-bar>

    <v-content class="main">
      <router-view></router-view>
    </v-content>

    <v-navigation-drawer
      app
      v-model="$store.state.drawerOpen"
      absolute
      temporary
      :hide-overlay="true"
      style="margin-top: 64px;"
      v-if="$route.name !== 'login'"
    >
      <!-- clipped = true does not work ? -->
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Title</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item>test</v-list-item>
        <v-list-item>test</v-list-item>
        <v-list-item>test</v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer app class="footer" color="secondary" :fixed="true">
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
    Menu,
    Footer
  },
  data: () => {
    return {
      drawer: null
    };
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

// .main {
//   width: 100%;
//   margin: 0;
// }
.nav-view {
  width: 100%;
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
.status {
  height: 3em;
}
.app {
  // background-color: rgb(35, 39, 41);
  margin: 0;
  padding: 0;
}
</style>
