<template>
  <div class="section">
    <h1>Dashboard</h1>
    <div class="dashboard-center">
      <h3 class="current-plot">{{plots[currentPlot].title}}</h3>
      <div v-show="ready" class="dashboard">
        <Chart
          :height="'400px'"
          :width="'800px'"
          :cumulated="chartType=='lines'"
          :type="chartType"
          :distribution="distribution"
        ></Chart>
        <div class="chart-selector">
          <v-radio-group v-model="currentPlot" row>
            <v-radio label="Mails envoyés" value="mailsSent"></v-radio>
            <v-radio label="Mails reçus" value="mailsReceived"></v-radio>
            <v-radio label="Lydia" value="lydia"></v-radio>
            <v-radio label="Amazon" value="amazon"></v-radio>
          </v-radio-group>
        </div>
        <div class="chart-options">
          <v-radio-group v-model="chartType" row>
            <v-radio label="Simple" value="point"></v-radio>
            <v-radio label="Cumulé" value="lines"></v-radio>
          </v-radio-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "../utils/Chart";

export default {
  data: () => {
    return {
      currentPlot: "mailsSent",
      chartType: "lines",
      plots: {
        mailsSent: {
          title: "Votre fréquence d'envoi de mail",
          distribution: []
        },
        mailsReceived: {
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
      return this.plots[this.currentPlot].distribution.length;
    }
  },
  components: {
    Chart
  },
  mounted() {},
  created() {
    this.$store.watch(
      (state, getters) => state.basic.google.mailData,
      (newValue, oldValue) => {
        if (newValue != null) {
          this.$set(
            this.plots.mailsReceived,
            "distribution",
            this.$store.state.basic.google.mailData.received.distribution
          );
        }
        if (newValue != null) {
          this.$set(
            this.plots.mailsSent,
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
.chart-placeholder {
  background-color: teal;
  width: 60%;
  height: 50%;
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
</style>
