<template>
  <div>
    <span v-if="hoveredItem">
      <span>
        Source :
        <span class>{{hoveredItem}}</span>
      </span>
    </span>
    <span v-else>Survolez un élément pour afficher sa provenance</span>
  </div>
</template>

<script>
export default {
  computed: {
    hoveredItem: function() {
      if (this.$store.state.hoveredElements.length) {
        return this.$store.state.hoveredElements[
          this.$store.state.hoveredElements.length - 1
        ];
      } else {
        return null;
      }
    }
  }
};
</script>