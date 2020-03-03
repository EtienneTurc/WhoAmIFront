import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi"
  },
  theme: {
    themes: {
      light: {
        primary: "#2C3E50",
        secondary: "#0184AF",
        background: "#F5F5F5"
      },
      dark: {}
    },
    options: {
      customProperties: true
    }
  }
});
