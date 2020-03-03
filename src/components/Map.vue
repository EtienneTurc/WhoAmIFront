<template>
	<div id="map" :style="`height:${height};width:${width}`"></div>
</template>

<script>
export default {
	props: ["width", "height", "places"],
	data() {
		return {}
	},
	methods: {
		async initialize() {
			let promises = []
			for (let p of this.places) {
				promises.push(this.geolocalize(p))
			}

			var map = L.map("map").setView([47, 2.34293], 5) // France center
			var osmLayer = L.tileLayer(
				"http://{s}.tile.osm.org/{z}/{x}/{y}.png",
				{
					attribution: "© OpenStreetMap contributors",
					maxZoom: 19
				}
			)
			map.addLayer(osmLayer)

			let places_coords = await Promise.all(promises)

			for (let i in places_coords) {
				let p = places_coords[i]
				if (p.data.length) {
					L.marker([p.data[0].lat, p.data[0].lon], {
						title: this.places[i]
					}).addTo(map)
				}
			}
		},
		async geolocalize(query) {
			return this.$http.get(
				"https://nominatim.openstreetmap.org/search",
				{
					params: {
						q: query,
						format: "json"
					},
					withCredentials: false
				}
			)
		}
	},
	mounted() {
		this.initialize()
	}
}
</script>

<style>
</style>
