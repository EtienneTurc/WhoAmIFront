<template>
	<div ref="plot" :style="`height:${height};width:${width}`"></div>
</template>

<script>
import Plotly from "plotly.js"
import { getDayInSeconds } from "../../utils/utils"

export default {
	props: ["distribution", "height", "width", "type", "cumulated"],
	watch: {
		distribution() {
			let res = this.getDistribution(this.distribution.slice())
			var data = [
				{
					x: res.x,
					y: res.distribution,
					mode: this.type == "point" ? "markers" : "lines",
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
		getDistribution(input_distrib) {
			let millisecondsInDay = 1000 * 3600 * 24
			input_distrib.sort((a, b) => {
				return a.date - b.date
			})

			let lastDate = getDayInSeconds(input_distrib[0].date)
			let distribution = [1]
			let amount = 0

			for (let d of input_distrib) {
				let day = getDayInSeconds(d.date)
				if (day == lastDate) {
					distribution[distribution.length - 1] += d.amount
				} else {
					amount = this.cumulated
						? distribution[distribution.length - 1]
						: 0
					distribution = distribution.concat(
						new Array((day - lastDate) / millisecondsInDay).fill(
							amount
						)
					)
					distribution[distribution.length - 1] += d.amount
					lastDate = day
				}
			}

			let d = new Date(getDayInSeconds(input_distrib[0].date))
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
