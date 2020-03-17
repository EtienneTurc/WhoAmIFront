<template>
  <div @mouseenter="setOriginIndicator" @mouseleave="resetOriginIndicator">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      required: true,
      type: String
    }
  },
  methods: {
    setOriginIndicator: function() {
      this.$store.commit("STACK_HOVERED_ELEMENT_NAME", this.name);
    },
    resetOriginIndicator: function() {
      this.$store.commit("POP_HOVERED_ELEMENT_NAME");
    }
  }
};
</script>