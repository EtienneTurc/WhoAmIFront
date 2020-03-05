<template>
	<div ref="plot" :style="`height:${height};width:${width}`"></div>
</template>

<script>
import Plotly from "plotly.js"

export default {
	props: ["dates", "height", "width"],
	watch: {
		dates() {
			let res = this.getDistribution()
			var data = [
				{
					x: res.x,
					y: res.distribution,
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
		// TODO Opti this function
		getDistribution() {
			let millisecondsInDay = 1000 * 3600 * 24
			let dates = this.dates.map(
				d => Math.floor(d / millisecondsInDay) * millisecondsInDay
			)
			dates.sort()

			let startDate = dates[0]
			let lastDate = dates[0]
			let distribution = [1]

			for (let d of dates) {
				if (d == lastDate) {
					distribution[distribution.length - 1] += 1
				} else {
					distribution = distribution.concat(
						new Array((d - lastDate) / millisecondsInDay).fill(0)
					)
					distribution[distribution.length - 1] += 1
					lastDate = d
				}
			}

			let d = new Date(dates[0])
			let x = []
			for (let index = 0; index < distribution.length; index++) {
				x.push(this.getTime(d))
				d.setDate(d.getDate() + 1)
			}
			return { x: x, distribution: distribution }
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
