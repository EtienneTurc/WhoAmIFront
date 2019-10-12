<template>
	<v-container fluid align-content-center>
		<v-layout justify-center row fill-height>
			<div class="text-md-center">
				<h1 class="font-weight-light display-3">Voici les infos du calendrier:</h1>

				<div v-for="event in events" :key="event.id">
					{{event.description}}
					<br />
				</div>
			</div>
		</v-layout>
	</v-container>
</template>

<script>
import utils from "../utils/utils"

export default {
	data: () => ({
		events: {}
	}),
	methods: {
		login: function() {
			utils.login()
		}
	},
	created() {
		this.$http
			.get(process.env.VUE_APP_API_URL + "/google/calendar", {
				headers: utils.getCode()
			})
			.then(res => {
				this.events = res.data[0]
			})
			.catch(err => {
				console.log(err)
			})
	}
}
</script>
<style scoped>
body {
	height: 100%;
}
</style>
