<template>
	<div>
		<v-container fluid align-content-center class="main">
			<div class="title">
				<p class="display-3">Your results</p>
				<v-divider></v-divider>
			</div>
			<v-layout justify-center row>
				<v-tabs class="elevation-6" background-color="secondary" dark :grow="true">
					<v-tabs-slider color="orange"></v-tabs-slider>
					<v-tab :href="'#tab_basic_info'">Basic information</v-tab>
					<v-tab :href="'#tab_analytics'">Analytics</v-tab>

					<v-tab-item :value="'tab_basic_info'">
						<v-card flat tile class="card">
							<v-card-text>
								<v-flex xs5>
									<b>Last name</b>
									<br />
									<span v-if="user_info.names">
										{{
										user_info.names[0].familyName | prettyName
										}}
									</span>
								</v-flex>
								<v-flex xs5>
									<b>First name</b>
									<br />
									<span v-if="user_info.names">
										{{
										user_info.names[0].givenName | prettyName
										}}
									</span>
								</v-flex>

								<v-flex xs5>
									<b>Mail address</b>
									<br />
									<span v-if="user_info.emailAddresses">
										{{
										user_info.emailAddresses[0].value
										}}
									</span>
								</v-flex>
								<v-flex xs5>
									<b>Calendar events found</b>
									<br />
									<span v-if="user_info.emailAddresses">
										{{
										this.events.length
										}}
									</span>
								</v-flex>
							</v-card-text>
						</v-card>
					</v-tab-item>

					<v-tab-item :value="'tab_calendar'">
						<v-card flat tile>
							<v-card-text>
								<v-flex xs5>
									<b>{{ this.events.length }} events found</b>
									<br />
								</v-flex>
							</v-card-text>
						</v-card>
					</v-tab-item>

					<v-tab-item :value="'tab_analytics'">
						<v-card flat tile>
							<v-card-text>
								<v-flex xs5>
									<b>Data analysis placeholder</b>
									<br />
								</v-flex>
							</v-card-text>
						</v-card>
					</v-tab-item>
				</v-tabs>
			</v-layout>
		</v-container>
	</div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Fugaz+One&display=swap");

.main {
	padding: 4em;
}
.title {
	margin-bottom: 2em;
}
</style>

<script>
import utils from "../utils/utils"

export default {
	data: () => ({
		events: {},
		user_info: {},
		query: {}
	}),
	methods: {
		login: function() {
			utils.login()
		},
		getCalendar: function() {
			this.$http
				.get(process.env.VUE_APP_API_URL + "/google/calendar", {
					headers: utils.getHeaders(this)
				})
				.then(res => {
					this.events = res.data.events
					this.$router.replace({ query: {} })
				})
				.catch(err => {
					console.log(err)
				})
		},
		getPeopleInfo() {
			this.$http
				.get(process.env.VUE_APP_API_URL + "/google/people", {
					headers: utils.getHeaders(this)
				})
				.then(res => {
					this.user_info = res.data.data
				})
				.catch(err => {
					console.log(err)
				})
		}
	},
	created: function() {
		this.query = this.$route.query
		this.getPeopleInfo()
		this.getCalendar()
	}
}
</script>
