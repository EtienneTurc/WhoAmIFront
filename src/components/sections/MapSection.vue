<template>
	<div class="section map">
		<Map
			:height="'90%'"
			:width="'90%'"
			:places="['ENSTA Paristech', '5 rue Mizon, 75015 Paris', '2 boulevard du général Auguste Dubail, 90000 Belfort']"
		></Map>
	</div>
</template>

<script>
import Map from "@/components/utils/Map"
export default {
	components: {
		Map
	},
	computed: {
		places: {}
	}
}
</script>

<style lang="scss" scoped>
.map {
	margin: auto;
	vertical-align: middle;
}
</style>
