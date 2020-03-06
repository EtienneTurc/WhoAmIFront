<template>
	<div class="main-login primary">
		<v-card class="card">
			<v-card-text>
				<v-row class="login-row">
					<v-col class="logo-col text-center">
						<img src="../assets/img/logo-square.png" class="logo" />
						<div class="typer-container">
							<vue-typer
								:text="['La première plateforme de\n monitoring et de gestion de vos données personnelles']"
								:erase-on-complete="true"
								:type-delay="50"
								:repeat="0"
								:eraseOnComplete="false"
							></vue-typer>
						</div>
					</v-col>
					<v-col class="text-center">
						<div class="left-col-content">
							<h3 class="mb-10">Quelles plateformes souhaitez-vous analyser ?</h3>
							<v-checkbox :label="`Google`" color="primary" input-value="true" value></v-checkbox>
							<v-checkbox :label="`Facebook`" color="primary" disabled>piub</v-checkbox>
							<v-checkbox :label="`LinkedIn`" color="primary" disabled></v-checkbox>
							<v-btn large @click="loginGoogle" color="attention" class="white--text">Commencer</v-btn>
							<v-btn large @click="loginFacebook" color="danger" class="white--text">Commencer</v-btn>
						</div>
					</v-col>
				</v-row>
			</v-card-text>
		</v-card>
	</div>
</template>

<script>
</script>

<style scoped lang="scss">
.main-login {
	margin-top: 0;
	width: 100% !important;
	padding: 0;
	height: 100vh;
}
.typer-container {
	width: 280px;
	margin: auto;
	height: 50px;
}
.vue-typer {
	font-family: "PT mono";
	word-break: normal !important;
	overflow-wrap: break-word !important;
}
.card {
	max-width: 1000px;
	margin: auto;
	top: 50%;
	transform: translateY(-50%);
	border-radius: 25px;
}

.login-row {
	// height: 500px;
	margin: 3em 0;
}
.logo {
	height: 200px;
	width: 200px;
	margin: auto;
	margin-bottom: 70px;
}

.s-bg {
	background-color: #2980b9;
}

.title {
	margin-bottom: 2em;
}
</style>

<script>
import utils from "../utils/utils"

export default {
	data: () => ({}),
	methods: {
		loginGoogle: function() {
			localStorage.removeItem("token")
			this.$http
				.get(process.env.VUE_APP_API_URL + "/login/google")
				.then(res => {
					this.$store.commit("setGoogleConnectionState", true)
					window.location.replace(res.data)
				})
				.catch(err => {
					console.log(err)
				})
		},
		loginFacebook() {
			let url = "https://www.facebook.com/v6.0/dialog/oauth?"
			let queries = {
				client_id: "287942492167943",
				redirect_uri:
					"https://local-redirect.data-ensta.fr/oauthFacebook?port=8080",
				state: "",
				scope: "user_hometown,user_location,user_photos"
			}
			let i = 0
			for (let q in queries) {
				url += i ? "&" : ""
				url += q + "=" + queries[q]
				i++
			}
			window.location.replace(url)
		}
	}
}
</script>
