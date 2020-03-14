<template>
  <div class="map">
    <Map :height="'90%'" :width="'90%'" :places="places"></Map>
  </div>
</template>

<script>
import Map from "@/components/utils/Map";
export default {
  components: {
    Map
  },
  computed: {
    places() {
      let p = [];
      if (this.$store.state.basic.google.peopleData) {
        for (let adr of this.$store.state.basic.google.peopleData.addresses) {
          p.push({ location: adr, icon: "home", color: "blue-dark" });
        }
      }
      if (this.$store.state.analytics.google.data.uber_rides) {
        for (let ride of this.$store.state.analytics.google.data.uber_rides) {
          p.push({
            location: ride.departure,
            icon: "car",
            color: "red"
          });
          p.push({
            location: ride.destination,
            icon: "car",
            color: "red"
          });
        }
      }
      if (this.$store.state.analytics.google.data.uber_bicycle) {
        for (let ride of this.$store.state.analytics.google.data.uber_bicycle) {
          p.push({
            location: ride.departure,
            icon: "bike",
            color: "red"
          });
          p.push({
            location: ride.destination,
            icon: "bike",
            color: "red"
          });
        }
      }
      return p;
    }
  }
};
</script>

<style lang="scss" scoped>
.map {
  width: 600px;
  height: 400px;
  margin: auto;
  vertical-align: middle;
}
</style>
