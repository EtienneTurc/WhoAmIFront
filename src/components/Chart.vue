<template>
	<div ref="plot" style="width:100%"></div>
</template>

<script>
import Plotly from "plotly.js"

export default {
	props: ["distribution", "startDate"],
	watch: {
		distribution() {
			var data = [
				{
					x: this.getTimeDistribution(
						this.startDate,
						this.distribution.length
					),
					y: this.distribution,
					mode: "lines",
					type: "scatter"
				}
			]

			Plotly.newPlot(this.$refs.plot, data, {}, { displayModeBar: false })
		}
	},
	data() {
		return {}
	},
	methods: {
		getTimeDistribution(startDate, size) {
			let d = new Date(startDate)
			let x = []
			for (let index = 0; index < size; index++) {
				x.push(this.getTime(d))
				d.setDate(d.getDate() + 1)
			}
			return x
		},
		getTime(date) {
			let months = [
				"Jan",
				"Fev",
				"Mar",
				"Avr",
				"Mai",
				"Juin",
				"Jui",
				"Aou",
				"Sep",
				"Oct",
				"Nov",
				"Dec"
			]
			let year = date.getFullYear()
			return (
				date.getDate() +
				" " +
				months[date.getMonth()] +
				" " +
				year.toString().substr(-2)
			)
		}
	}
}
</script>

<style>
</style>
