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
                secondary: "#3c6382"
            },
            dark: {
                primary: "#F8F8F8"
            }
        },
        options: {
            customProperties: true
        }
    }
});