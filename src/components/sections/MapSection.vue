<template>
  <div class="section">
    <Map></Map>
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
.id {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>