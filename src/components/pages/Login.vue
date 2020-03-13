<template>
  <div class="main-login primary">
    <v-card class="card">
      <v-card-text>
        <v-row class="login-row">
          <v-col class="logo-col text-center">
            <img src="@/assets/img/logo-square.png" class="logo" />
            <div class="typer-container">
              <vue-typer
                :text="['La première plateforme de\n monitoring et de gestion de vos données personnelles']"
                :erase-on-complete="true"
                :type-delay="50"
                :repeat="0"
                :eraseOnComplete="false"
              ></vue-typer>
            </div>
          </v-col>
          <v-col class="left-col">
            <div class="left-col-content">
              <swiper ref="welcomeSwiper" :options="{ initialSlide: 0, slidesPerView: 1}">
                <swiper-slide>
                  <p>Bienvenue sur WhoAmI.com,</p>
                  <p>Connectez-vous à notre service avec vos comptes Facebook, LinkedIn ou Google. Avec WhoAmI nous vous proposons de reprendre le contrôle de vos données en :</p>

                  <ol>
                    <li>analysant les données que vous laissez en ligne</li>
                    <li>visualisant les informations issues de ces données</li>
                    <li>gérant et supprimant les informations sensibles de vos comptes internet</li>
                  </ol>
                  <br />
                  <p>WhoAmI ne conserve aucune de vos données après votre déconnexion.</p>
                  <div class="text-center">
                    <v-btn
                      large
                      @click="swiper.slideTo(1, 1000, false)"
                      color="attention"
                      class="white--text"
                    >Commencer</v-btn>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <h3 class="mb-10">Quelles plateformes souhaitez-vous analyser ?</h3>
                  <v-checkbox
                    :label="`Google`"
                    v-model="loginWithGoogle"
                    color="primary"
                    class="checkbox"
                    input-value="true"
                    value
                  ></v-checkbox>
                  <!-- <v-tooltip bottom>
										<template v-slot:activator="{ on }">
                  <span v-on="on">-->
                  <v-checkbox
                    v-model="loginWithFacebook"
                    :label="`Facebook`"
                    color="primary"
                    class="checkbox"
                  ></v-checkbox>
                  <!-- </span>
										</template>
										<span>Cette fonctionnalité sera bientôt disponible !</span>
                  </v-tooltip>-->
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <span v-on="on">
                        <v-checkbox :label="`LinkedIn`" color="primary" disabled class="checkbox"></v-checkbox>
                      </span>
                    </template>
                    <span>Cette fonctionnalité sera bientôt disponible !</span>
                  </v-tooltip>
                  <div class="text-center">
                    <v-btn
                      text
                      large
                      @click="swiper.slideTo(0, 1000, false)"
                      class="white--text mr-9"
                    >
                      <v-icon color="primary">mdi-arrow-left</v-icon>
                    </v-btn>
                    <v-btn
                      large
                      @click="startLogin"
                      color="attention"
                      class="white--text ml-9"
                    >Se connecter</v-btn>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>



<script>
import utils from "@/utils/utils";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { login, logOut } from "@/utils/login";

export default {
  data: () => {
    return {
      swiper: null,
      loginWithGoogle: true,
      loginWithFacebook: true
    };
  },
  mounted() {
    this.swiper = this.$refs.welcomeSwiper.swiper;
  },
  created() {
    logOut(Object.keys(this.$store.state.connexions), this);
  },
  computed: {
    toLog: function() {
      return [
        ...(this.loginWithGoogle ? ["google"] : []),
        ...(this.loginWithFacebook ? ["facebook"] : [])
      ];
    }
  },
  methods: {
    startLogin() {
      login(this.toLog);
    }
  }
};
</script>



<style scoped lang="scss">
.left-col {
  width: 50%;
}
.main-login {
  margin-top: 0;
  width: 100% !important;
  padding: 0;
  height: 100vh;
}
.typer-container {
  width: 280px;
  margin: auto;
  height: 50px;
}
.vue-typer {
  font-family: "PT mono";
  word-break: normal !important;
  overflow-wrap: break-word !important;
}
.card {
  max-width: 1000px;
  margin: auto;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 25px;
}

.login-row {
  // height: 500px;
  margin: 3em 0;
}
.logo {
  height: 200px;
  width: 200px;
  margin: auto;
  margin-bottom: 70px;
}

.s-bg {
  background-color: #2980b9;
}

.title {
  margin-bottom: 2em;
}

.checkbox {
  margin-left: 2em;
}
</style>
