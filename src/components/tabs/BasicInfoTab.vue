<template>
	<div>
		<v-card flat tile :loading="!loaded" class="card">
			<v-card-text v-if="loaded">
				<v-flex xs5>
					<b>Last name</b>
					<br />
					<span>{{ people.lastName | prettyName }}</span>
				</v-flex>
				<v-flex xs5>
					<b>First name</b>
					<br />
					<span>{{ people.firstName | prettyName }}</span>
				</v-flex>

				<v-flex xs5>
					<b>Adresses mail</b>
					<template v-for="mail in people.mails">
						<p :key="mail">{{ mail }}</p>
					</template>
				</v-flex>
				<v-flex xs5>
					<b>Adresses</b>
					<template v-for="address in people.addresses">
						<p :key="address">{{ address }}</p>
					</template>
				</v-flex>
				<v-flex xs5>
					<b>Calendar events found</b>
					<br />
					<span>{{ this.events.number }}</span>
				</v-flex>
				<v-flex xs5>
					<b>Date of birth</b>
					<br />
					<span>{{ this.people.birthDate }}</span>
				</v-flex>
			</v-card-text>
		</v-card>
		<map-component
			:height="'400px'"
			:width="'100%'"
			:places="['ENSTA Paristech', '5 rue Mizon, 75015 Paris', '2 boulevard du général Auguste Dubail, 90000 Belfort']"
		></map-component>
	</div>
</template>

<script>
import utils from "../../utils/utils"
import Chart from "../Chart"
import MapDisplay from "../Map"

export default {
	data: () => ({
		events: {},
		mails: { received: {}, sent: {} },
		people: {},
		user_info: {},
		loaded: false
	}),
	components: {
		"map-component": MapDisplay
	},
	methods: {
		getSimpleAnalytics: function() {
			this.$http
				.get("google/", {
					headers: utils.getHeaders(this)
				})
				.then(res => {
					this.people = res.data.people
					this.events = res.data.calendar
					this.mails = res.data.gmail
					this.loaded = true
				})
				.catch(err => {
					console.log(err)
				})
		},
		getIntermediateMails: function() {
			this.$http
				.get("google/gmail_simple", {
					headers: utils.getHeaders(this)
				})
				.then(res => {
					console.log(res)
				})
				.catch(err => {
					console.log(err)
				})
		}
	},
	created: function() {
		// this.getIntermediateMails()
		// this.getSimpleAnalytics()
	}
}
</script>
