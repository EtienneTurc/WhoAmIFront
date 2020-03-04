<template>
  <div class="section map">
    <Map
      :height="'90%'"
      :width="'90%'"
      :places="['ENSTA Paristech', '5 rue Mizon, 75015 Paris', '2 boulevard du général Auguste Dubail, 90000 Belfort']"
    ></Map>
  </div>
</template>

<script>
import Map from "@/components/Map";
export default {
  components: {
    Map
  }
};
</script>

<style lang="scss" scoped>
.map {
  padding: auto;
}
</style>

