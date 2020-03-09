<template>
  <div>
    <v-container fluid align-content-center class="main">
      <IDSection id="idSection"></IDSection>
      <DashboardSection id="dashboardSection"></DashboardSection>
      <MapSection id="mapSection"></MapSection>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Fugaz+One&display=swap");

.main {
  padding: 0;
  margin: 0;
}
.title {
  margin-bottom: 2em;
}
</style>

<script>
import utils from "@/utils/utils";
import IDSection from "@/components/sections/IDSection";
import MapSection from "@/components/sections/MapSection";
import DashboardSection from "@/components/sections/DashboardSection";

export default {
  components: {
    IDSection,
    MapSection,
    DashboardSection
  },
  created() {
    this.$store.dispatch("GET_GOOGLE_DATA");
    // this.$http
    // 	.get("facebook/basic/info")
    // 	.then(res => {
    // 		console.log(res)
    // 	})
    // 	.catch(err => console.log(err))
  }
};
</script>
