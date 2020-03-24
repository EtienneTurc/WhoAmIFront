<template>
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
</template>

<script>
import Chart from "../utils/Chart"
import { widgetMixin } from "../../utils/widgetMixin"

export default {
	mixins: [widgetMixin],
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
		}
	},
	computed: {
		distribution: function() {
			return this.plots[this.currentPlot].distribution
		}
	},
	components: {
		Chart
	},
	watch: {
		data() {
			if (this.data.mails.data) {
				this.$set(
					this.plots["mails envoyés"],
					"distribution",
					this.data.mails.data.sent.distribution
				)
				this.$set(
					this.plots["mails reçus"],
					"distribution",
					this.data.mails.data.received.distribution
				)
			}
			if (this.data.lydia && this.data.lydia.data) {
				this.$set(
					this.plots.lydia,
					"distribution",
					this.data.lydia.data
				)
			}
			if (this.data.amazon && this.data.amazon.data) {
				this.$set(
					this.plots.amazon,
					"distribution",
					this.data.amazon.data
				)
			}
		}
	},
	async mounted() {
		this.currentPlot = "mails envoyés"
		this.$_widgetMixin_fetchData("/component/dashboard")
	}
}
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
