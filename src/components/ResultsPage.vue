<template>
    <div>
    <v-container fluid align-content-center class="main">
		<v-layout justify-center row>
			<v-tabs background-color="c_secondary" color="white" :grow="true" icons-and-text>
				
				<v-tabs-slider color="c_orange"></v-tabs-slider>
				<v-tab :href="'#tab_basic_info'">
					Basic information
					<v-icon>mdi-account</v-icon>
				</v-tab>
				
				<v-tab :href="'#tab_calendar'">
					Calendar
					<v-icon>mdi-calendar</v-icon>
				</v-tab>
				<v-tab-item :value="'tab_basic_info'">
					 <BasicInfo></BasicInfo>
				</v-tab-item>

				<v-tab-item :value="'tab_calendar'">
					<Calendar></Calendar>
				</v-tab-item>
			</v-tabs>
		</v-layout>
	</v-container>
    </div>
    


</template>

<style lang="scss" scoped>

</style>


<script>
import utils from "../utils/utils"
import BasicInfo from "@/components/tabs/BasicInfo"
import Calendar from "@/components/tabs/Calendar"

export default {
	data: () => ({
		events: {},
		user_info: {},
		query: {},
	}),
	components: {
		BasicInfo: BasicInfo,
		Calendar: Calendar
	},
	methods: {
		login: function() {
			utils.login()
		},
		// getCalendar: function() {
		// 	this.$http
		// 		.get(process.env.VUE_APP_API_URL + "/google/calendar", {
		// 			headers: utils.getHeaders(this.query.code)
		// 		})
		// 		.then(res => {
		// 			this.events = res.data.events
		// 			this.$router.replace({ query: {} })
		// 		})
		// 		.catch(err => {
		// 			console.log(err)
		// 		})
		// },
	},
	// created: function() {
	// 	this.query = this.$route.query
	// 	this.getCalendar()
	// },
}
</script>

