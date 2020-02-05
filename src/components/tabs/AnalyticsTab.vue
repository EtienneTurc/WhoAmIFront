<template>
	<v-card flat tile :loading="isLoading" class="card">
		<v-card-text v-if="!isLoading">{{ result }}</v-card-text>
		<v-card-text v-else>
			<p>We're computing your results, please hold on for a few more seconds!</p>
		</v-card-text>
	</v-card>
</template>

<script>
export default {
	data: () => ({
		result: {},
		isLoading: true
	}),
	methods: {
		getAnalyticsResults: function() {
			this.isLoading = true
			this.$http
				.get(process.env.VUE_APP_API_URL + "/analytics")
				.then(res => {
					this.result = res.data.result
					this.isLoading = false
				})
		},
		getMails() {
			this.isLoading = true
			this.$http
				.get(process.env.VUE_APP_API_URL + "/google/gmail")
				.then(res => {
					this.result = res.data.result
					this.isLoading = false
				})
		},
		getDrive() {
			this.isLoading = true
			this.$http
				.get(process.env.VUE_APP_API_URL + "/google/drive")
				.then(res => {
					this.result = res.data.result
					this.isLoading = false
				})
		}
	},
	created: function() {
		this.getMails()
	}
}
</script>

<style lang="scss" scoped></style>
