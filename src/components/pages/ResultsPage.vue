<template>
  <div>
    <v-row>
      <v-col>
        <div class="widget-placeholder id">
          <ID></ID>
        </div>
        <div class="widget-placeholder">
          <Map></Map>
        </div>
      </v-col>
      <v-col>
        <div class="right widget-placeholder">
          <Dashboard></Dashboard>
        </div>
        <div class="widget-placeholder word-cloud">
          <WordCloud></WordCloud>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ID from "../widgets/ID";
import Map from "../widgets/Map";
import Dashboard from "../widgets/Dashboard";
import WordCloud from "../widgets/WordCloud";

export default {
  components: {
    ID,
    Map,
    Dashboard,
    WordCloud
  },
  created: async function() {
    await this.$store.dispatch("GET_CONNEXIONS_STATUS");
    await this.$store.dispatch("SYNC_DATA");
  }
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Fugaz+One&display=swap");

.title {
  margin-bottom: 2em;
}
.left,
.right {
  width: 100%;
}
.widget-placeholder {
  display: flex;
  flex-direction: row;
  justify-content: center;
  &.id {
    transform: scale(1);
  }
  &.word-cloud {
    margin-top: 100px;
    width: 100%;
    height: 200px;
  }
}
</style>

