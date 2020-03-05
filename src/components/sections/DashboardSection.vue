<template>
	<div class="section">
		<h1>Dashboard</h1>
		<!-- v-if="$store.state.accounts.google.mailData" -->
		<Chart
			:height="'400px'"
			:width="'400px'"
			:cumulated="true"
			:type="'line'"
			:distribution="distribution"
		></Chart>
		<!-- <div class="chart-placeholder"></div> -->
		<div class="chart-selector">
			<!-- <v-select
        :items="['Lydia', 'Amazon', 'Mails']"
        :change="setChart"
        v-model="currentPlot"
        label="Que souhaitez-vous tracer ?"
			></v-select>-->
			<v-radio-group v-model="currentPlot" row>
				<v-radio label="Mails" value="mails"></v-radio>
				<v-radio label="Lydia" value="lydia"></v-radio>
				<v-radio label="Amazon" value="amazon"></v-radio>
			</v-radio-group>
		</div>
	</div>
</template>

<script>
import Chart from "../utils/Chart"

export default {
	data: () => {
		return {
			currentPlot: "mails",
			distribution: []
		}
	},
	components: {
		Chart
	},
	mounted() {
		this.$set(this, "distribution", [
			{ date: "1583414126000", amount: 1 },
			{ date: "1583414126002", amount: 1 },
			{ date: "1583415156002", amount: 1 },
			{ date: "1583415156007", amount: 1 },
			{ date: "1582268380000", amount: 1 },
			{ date: "1582268380000", amount: 1 }
		])
	},
	methods: {
		setChart(e) {
			console.log(e)

			// this.currentPlot
		}
	}
}
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
</style>
