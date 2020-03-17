<template>
  <Hoverable name="Google">
    <div class="center">
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
      <Chart
        :height="'400px'"
        :width="'600px'"
        :cumulated="chartType=='lines'"
        :type="chartType"
        :distribution="distribution"
      ></Chart>
    </div>
  </Hoverable>
</template>

<script>
import Chart from "../utils/Chart";
import Hoverable from "../utils/Hoverable";

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
    Hoverable
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

.center {
  margin: auto;
}

.controls {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
}
</style>
