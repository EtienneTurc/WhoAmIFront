<template>
  <v-app class="app">
    <v-app-bar app dark class="elevation-6 primary">
      <Menu></Menu>
    </v-app-bar>

    <v-content>
      <router-view>
        <IDSection></IDSection>
      </router-view>
    </v-content>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item>test</v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer app class="footer" color="secondary">
      <Footer></Footer>
    </v-footer>
  </v-app>
</template>

<script>
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
// import ID from "@/components/ID";
import IDSection from "@/components/sections/IDSection";

export default {
  name: "App",
  components: {
    Menu,
    Footer,
    IDSection
  },
  data: () => {
    return {
      drawer: null
    };
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
.status {
  height: 3em;
}
.app {
  // background-color: rgb(35, 39, 41);
}
</style>
