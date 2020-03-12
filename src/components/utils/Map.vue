<template>
	<div class="center" style="height:100%; width:100%">
		<div id="map" :style="`height:${height};width:${width}`" class="center" style="z-index:0"></div>
	</div>
</template>

<script>
import { getMapMarkerHtml } from "@/utils/mapMarker.js"

export default {
	props: ["width", "height", "places"],
	data() {
		return {
			map: null,
			markers: null
		}
	},
	watch: {
		places() {
			this.placeMarkers()
		}
	},
	methods: {
		initialize() {
			this.map = L.map("map").setView([47, 2.34293], 5) // France center
			this.map.scrollWheelZoom.disable()
			this.map.on("click", () => {
				this.map.scrollWheelZoom.enable()
			})
			this.map.on("mouseout", () => {
				this.map.scrollWheelZoom.disable()
			})

			var osmLayer = L.tileLayer(
				"http://{s}.tile.osm.org/{z}/{x}/{y}.png",
				{
					attribution: "© OpenStreetMap contributors",
					maxZoom: 19
				}
			)

			this.map.addLayer(osmLayer)

			this.placeMarkers()
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
		},
		async placeMarkers() {
			if (this.markers) this.map.removeLayer(this.markers)

			let promises = []
			for (let p of this.places) {
				promises.push(this.geolocalize(p.location))
			}

			let places_coords = await Promise.all(promises)

			if (places_coords) {
				this.markers = L.layerGroup()

				for (let i in places_coords) {
					let p = places_coords[i]
					if (!p.data.length) continue
					let pos = [p.data[0].lat, p.data[0].lon]
					let icon = L.divIcon({
						className: "map-marker-class",
						html: getMapMarkerHtml(
							this.places[i].color,
							this.places[i].icon
						)
					})
					L.marker(pos, {
						title: this.places[i],
						icon: icon
					}).addTo(this.markers)
				}
				this.map.addLayer(this.markers)
			}
		}
		// async googleGeoloc() {
		// 	let query = "2 Avenue du Général Dubail, 90000 Belfort"
		// 	let res = await this.$http.get("https://www.google.com/maps", {
		// 		headers: { "Access-Control-Allow-Origin": "*" },
		// 		params: {
		// 			q: query
		// 		},
		// 		crossdomain: true,
		// 		withCredentials: false
		// 	})
		// 	console.log(res)
		// }
	},
	mounted() {
		this.initialize()
	}
}
</script>

<style scoped>
.center {
	vertical-align: middle;
	margin: auto;
	top: 50%;
	transform: translateY(-23%);
	/* margin-right: auto; */
}
</style>
