<template>
  <div class="section">
    <ID class="id"></ID>
  </div>
</template>

<script>
import ID from "@/components/ID";
export default {
  components: {
    ID
  }
};
</script>

<style lang="scss" scoped>
.id {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>