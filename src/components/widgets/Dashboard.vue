<template>
  <div>
    <v-row>
      <v-col align="center" justify="center">
        <div class="dashboard-center" v-show="ready">
          <!-- <h3 class="current-plot">{{plots[currentPlot].title}}</h3> -->
          <div class="dashboard">
            <Chart
              :height="'400px'"
              :width="'800px'"
              :cumulated="chartType=='lines'"
              :type="chartType"
              :distribution="distribution"
            ></Chart>
            <div class="controls">
              <div class="combo">
                <v-combobox
                  v-model="currentPlot"
                  :items="Object.keys(plots)"
                  label="Choissez les données à afficher"
                  outlined
                  dense
                ></v-combobox>
              </div>
              <div class="radio">
                <v-radio-group v-model="chartType" row>
                  <v-radio label="Simple" value="point"></v-radio>
                  <v-radio label="Cumulé" value="lines"></v-radio>
                </v-radio-group>
              </div>
            </div>
          </div>
        </div>
        <div v-if="!ready">
          <Loader></Loader>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Chart from "../utils/Chart";
import Loader from "../utils/Loader";

export default {
  data: () => {
    return {
      currentPlot: "mails envoyés",
      chartType: "lines",
      plots: {
        "mails envoyés": {
          title: "Votre fréquence d'envoi de mail",
          distribution: []
        },
        "mails reçus": {
          title: "Votre fréquence de réception de mail",
          distribution: []
        },
        lydia: {
          title: "La balance de vos transactions Lydia",
          distribution: []
        },
        amazon: {
          title: "Vos derniers achats sur Amazon",
          distribution: []
        }
      }
    };
  },
  computed: {
    distribution: function() {
      return this.plots[this.currentPlot].distribution;
    },
    ready: function() {
      if (this.$store.state.analytics.google.fetching == false) {
        this.$set(this, "currentPlot", "mails envoyés");
        return true;
      } else {
        return false;
      }
    }
  },
  components: {
    Chart,
    Loader
  },
  mounted() {
    this.currentPlot = "mails envoyés";
  },
  created() {
    this.$store.watch(
      (state, getters) => state.basic.google.mailData,
      (newValue, oldValue) => {
        if (newValue != null) {
          this.$set(
            this.plots["mails reçus"],
            "distribution",
            this.$store.state.basic.google.mailData.received.distribution
          );
        }
        if (newValue != null) {
          this.$set(
            this.plots["mails envoyés"],
            "distribution",
            this.$store.state.basic.google.mailData.sent.distribution
          );
        }
      }
    );
    this.$store.watch(
      (state, getters) => state.analytics.google.data.lydia,
      (newValue, oldValue) => {
        if (newValue != null) {
          this.$set(
            this.plots.lydia,
            "distribution",
            this.$store.state.analytics.google.data.lydia
          );
        }
      }
    );
    this.$store.watch(
      (state, getters) => state.analytics.google.data.amazon,
      (newValue, oldValue) => {
        if (newValue != null) {
          this.$set(
            this.plots.amazon,
            "distribution",
            this.$store.state.analytics.google.data.amazon
          );
        }
      }
    );
  }
};
</script>

<style lang="scss" scoped>
.section {
  width: 100%;
}
.chart-selector {
  max-width: 300px;
}
.dashboard {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  height: 400px;
  width: 800px;
}
.controls {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  .radio {
    margin-bottom: 15px;
  }
}
</style>
