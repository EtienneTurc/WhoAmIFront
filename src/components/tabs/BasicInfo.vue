<template>
    <v-card flat tile class="card">
        <v-card-text>
            <v-flex xs5>
                <b>Last name</b>
                <br />
                <span v-if="user_info.names">{{ user_info.names[0].familyName | prettyName }}</span>
            </v-flex>
            <v-flex xs5>
                <b>First name</b>
                <br />
                <span v-if="user_info.names">{{ user_info.names[0].givenName | prettyName }}</span>
            </v-flex>
            <v-flex xs5>
                <b>Email Adress</b>
                <br />
                <span v-if="user_info.emailAddresses">{{ user_info.emailAddresses[0].value }}</span>
            </v-flex>
        </v-card-text>
    </v-card>
</template>

<script>
import utils from "../../utils/utils"

export default {
    data: () => ({
        user_info: {},
        query: {}
    }),
    methods: {
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
    },
    created: function() {
        this.query = this.$route.query
        this.getPeopleInfo()
    }

}
</script>