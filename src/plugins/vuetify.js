import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi',
    },
    theme: {
        themes: {
            light: {
                c_background: "#F8F8F8",
                c_orange: "#FF9800",
                c_secondary: "#3c6382",

            },

        },
        options: {
            customProperties: true
        }
    }
})