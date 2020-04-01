module.exports = {
  transpileDependencies: ["vuetify"],
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/style/_variables.scss";`
      }
    }
  }
};
