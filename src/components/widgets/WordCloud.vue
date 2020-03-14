<template>
  <vue-word-cloud :words="words" :color="color" font-family="Anton" />
</template>

<script>
import VueWordCloud from "vuewordcloud";
import lodash from "lodash";

export default {
  components: {
    [VueWordCloud.name]: VueWordCloud
  },
  data: () => {
    return {
      words: []
    };
  },
  methods: {
    startGettingWords: async function() {
      window.setInterval(
        async function() {
          let res = await this.$http.get("google/words");
          res.data.words.forEach(word => {
            if (!this.words.includes(word)) {
              this.$set(this.words, this.words.length, word);
            }
          });
        }.bind(this),
        5000
      );
    },
    color: function() {
      return _.sample(["#2C3E50", "#772D2D", "#0184AF"]);
    }
  },
  mounted: async function() {
    this.startGettingWords();
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Anton&display=swap");
</style>