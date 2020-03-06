<template>
  <div class="section">
    <h1>Dashboard</h1>
    <div class="dashboard-center">
      <h3 class="current-plot">{{plots[currentPlot].title}}</h3>
      <div v-show="ready">
        <Chart
          :height="'400px'"
          :width="'800px'"
          :cumulated="true"
          :type="'line'"
          :distribution="distribution"
        ></Chart>
      </div>

      <div class="chart-selector">
        <v-radio-group v-model="currentPlot" row>
          <v-radio label="Mails" value="mails"></v-radio>
          <v-radio label="Lydia" value="lydia"></v-radio>
          <v-radio label="Amazon" value="amazon"></v-radio>
        </v-radio-group>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "../utils/Chart";

export default {
  data: () => {
    return {
      currentPlot: "mails",
      plots: {
        mails: {
          title: "Vos mails sur les X derniers jours",
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
      console.log(this.plots[this.currentPlot].distribution.length);

      return this.plots[this.currentPlot].distribution.length;
    }
  },
  watch: {
    currentPlot: function(val) {}
  },
  components: {
    Chart
  },
  mounted() {},
  created() {
    this.$store.watch(
      (state, getters) => state.accounts.google.mailData,
      (newValue, oldValue) => {
        if (newValue != null) {
          this.$set(
            this.plots.mails,
            "distribution",
            this.$store.state.accounts.google.mailData.received.distribution
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
  },
  methods: {
    setChart(e) {
      console.log(e);

      // this.currentPlot
    }
  }
};
</script>

<style lang="scss" scoped>
.chart-placeholder {
  background-color: teal;
  width: 60%;
  height: 50%;
}
.chart-selector {
  max-width: 300px;
}
.dashboard-center {
  margin: auto;
}
</style>
