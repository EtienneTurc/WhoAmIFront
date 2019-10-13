<template>
	<v-container fluid align-content-center class="s-bg is-fullheight">
		<v-layout align-center justify-center row fill-height>
			<div class="text-md-center">
				<h1 class="font-weight-light display-3 white--text">
					KITE
					<sup style="font-size:0.4em; top: -1.2em;">0.1</sup>
				</h1>

				<h2 class="font-italic font-weight-regular white--text mb-5">Discover what Google knows on you</h2>
				<v-btn color="blue" depressed dark large @click="login">Log in with Google</v-btn>
			</div>
		</v-layout>
	</v-container>
</template>

<script>
import utils from "../utils/utils"

export default {
	data: () => ({}),
	methods: {
		login: function() {
			localStorage.removeItem("token")
			this.$http
				.get(process.env.VUE_APP_API_URL + "/login/google")
				.then(res => {
					window.location.replace(res.data)
				})
				.catch(err => {
					console.log(err)
				})
		}
	}
}
</script>
<style scoped>
.s-bg {
	background-color: #2c3e50;
}

.is-fullheight {
	height: 100vh;
	width: 100vw;
}

body {
	height: 100%;
}
</style>
