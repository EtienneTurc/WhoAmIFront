<template>
	<div class="map">
		<Map :height="'90%'" :width="'90%'" :places="places"></Map>
	</div>
</template>

<script>
import Map from "@/components/utils/Map"
import { widgetMixin } from "../../utils/widgetMixin"

export default {
	mixins: [widgetMixin],
	components: {
		Map
	},
	computed: {
		places() {
			let p = []
			if (!this.data) {
				return p
			}
			if (this.data.addresses && this.data.addresses.data) {
				for (let adr of this.data.addresses.data) {
					p.push({ location: adr, icon: "home", color: "blue-dark" })
				}
			}

			if (this.data.uberRides && this.data.uberRides.data) {
				for (let ride of this.data.uberRides.data) {
					p.push({
						location: ride.departure,
						icon: "car",
						color: "red"
					})
					p.push({
						location: ride.destination,
						icon: "car",
						color: "red"
					})
				}
			}

			if (this.data.uberBikes && this.data.uberBikes.data) {
				for (let ride of this.data.uberBikes.data) {
					p.push({
						location: ride.departure,
						icon: "bike",
						color: "red"
					})
					p.push({
						location: ride.destination,
						icon: "bike",
						color: "red"
					})
				}
			}
			return p
		}
	},
	async mounted() {
		this.$_widgetMixin_fetchData("/component/map")
	}
}
</script>

<style lang="scss" scoped>
.map {
	width: 600px;
	height: 400px;
	margin: auto;
	vertical-align: middle;
}
</style>
