<template>
	<v-container fluid align-content-center class="s-bg is-fullheight">
		<v-layout align-center justify-center row fill-height>
			<div class="text-md-center">
				<img style="max-height:200px; " :src="require('../assets/anonymous_logo.png')" />
				<h1 class="font-weight-light display-3 white--text">Who Am I ?</h1>
				<br />
				<h2
					class="font-italic font-weight-regular white--text mb-5"
				>Discover what Google knows about you !</h2>
				<br />
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
	background-color: #2980b9;
}

.is-fullheight {
	height: 100vh;
	width: 100vw;
}

body {
	height: 100%;
}
</style>
