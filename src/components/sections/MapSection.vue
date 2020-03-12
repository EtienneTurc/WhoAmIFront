<template>
	<div class="section map">
		<Map :height="'90%'" :width="'90%'" :places="places"></Map>
	</div>
</template>

<script>
import Map from "@/components/utils/Map"
export default {
	components: {
		Map
	},
	computed: {
		places() {
			let p = []
			if (this.$store.state.basic.google.peopleData) {
				p = this.$store.state.basic.google.peopleData.addresses
			}
			if (this.$store.state.analytics.google.data.uber_rides) {
				for (let ride of this.$store.state.analytics.google.data
					.uber_rides) {
					p.push(ride.departure)
					p.push(ride.destination)
				}
			}
			if (this.$store.state.analytics.google.data.uber_bicycle) {
				for (let ride of this.$store.state.analytics.google.data
					.uber_bicycle) {
					p.push(ride.departure)
					p.push(ride.destination)
				}
			}
			return p.filter(
				(value, index, self) => self.indexOf(value) === index
			)
		}
	}
}
</script>

<style lang="scss" scoped>
.map {
	margin: auto;
	vertical-align: middle;
}
</style>
