<template>
	<v-container fluid align-content-center class="s-bg is-fullheight">
		<v-layout justify-center row>
			<img style="max-height:200px; " :src="require('../assets/anonymous_logo.png')" />
			<v-stepper class="mt-12 stepper" vertical>
				<v-stepper-step editable complete step="1">
					<h1>Basic informations</h1>
				</v-stepper-step>

				<v-stepper-content class="font-size-content" step="1">
					<v-layout class="ml-3" row wrap>
						<v-flex xs6>
							<b>Last name</b>
							<br />
							<span v-if="user_info.names">{{ user_info.names[0].familyName | prettyName }}</span>
						</v-flex>
						<v-flex xs6>
							<b>First name</b>
							<br />
							<span v-if="user_info.names">{{ user_info.names[0].givenName | prettyName }}</span>
						</v-flex>

						<!-- <v-flex xs6>
							<b>Adresse</b>
							<br />Camille Claudel
						</v-flex>

						<v-flex xs6>
							<b>Phone number</b>
							<br />+33602375632
						</v-flex>
						<v-flex xs6>
							<b>Gender</b>
							<br />Mâle
						</v-flex>-->
						<v-flex xs6>
							<b>Addresse mail</b>
							<br />
							<span v-if="user_info.emailAddresses">{{ user_info.emailAddresses[0].value }}</span>
						</v-flex>
					</v-layout>
				</v-stepper-content>

				<v-stepper-step editable complete step="2">
					<h1>Informations extracted from the calendar</h1>
				</v-stepper-step>

				<v-stepper-content step="2">
					Info to complete
				</v-stepper-content>
			</v-stepper>
		</v-layout>
	</v-container>
</template>

<script>
import utils from "../utils/utils"

export default {
	data: () => ({
		events: {},
		user_info: {},
		query: {},
	}),
	methods: {
		login: function() {
			utils.login()
		}
	},
	created() {
		this.query = this.$route.query
		this.getPeopleInfo()
		this.getCalendar()
	},
	methods: {
		getCalendar() {
			this.$http
				.get(process.env.VUE_APP_API_URL + "/google/calendar", {
					headers: utils.getHeaders(this.query.code)
				})
				.then(res => {
					this.events = res.data.events[0]
					this.$router.replace({ query: {} })
				})
				.catch(err => {
					console.log(err)
				})
		},
		getPeopleInfo() {
			this.$http
				.get(process.env.VUE_APP_API_URL + "/google/people", {
					headers: utils.getHeaders(this.query.code)
				})
				.then(res => {
					this.user_info = res.data.data
				})
				.catch(err => {
					console.log(err)
				})
		}
	}
}
</script>
<style scoped>
body {
	height: 100vh;
}

.s-bg {
	background-color: #3498db;
}

.is-fullheight {
	min-height: 100vh;
	width: 100vw;
}

.stepper {
	max-width: 1000px;
	width: 800px;
}

.font-size-content {
	font-size: 18px;
}
</style>
