<template>
    <v-card flat tile>
        <v-card-text>
                <v-flex xs5>
                    <b>{{this.events.length}} events found</b>
                    <br />
                </v-flex>
        </v-card-text>
    </v-card>
</template>

<script>
import utils from "../../utils/utils"

export default {
    data: () => ({
        events: {},
        query: {},
    }),
    methods: {
        getCalendar: function() {
			this.$http
				.get(process.env.VUE_APP_API_URL + "/google/calendar", {
					headers: utils.getHeaders(this.query.code)
				})
				.then(res => {
					this.events = res.data.events
					this.$router.replace({ query: {} })
				})
				.catch(err => {
					console.log(err)
				})
		},
    },
    created: function() {
        this.query = this.$route.query
		this.getCalendar()
    }
}
</script>