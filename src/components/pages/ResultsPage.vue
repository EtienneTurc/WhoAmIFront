<template>
	<div>
		<bg-icons :color="'blue-dark'" :number="30"></bg-icons>
		<v-container fluid align-content-center class="main">
			<IDSection id="idSection"></IDSection>
			<DashboardSection id="dashboardSection"></DashboardSection>
			<MapSection id="mapSection"></MapSection>
		</v-container>
	</div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Fugaz+One&display=swap");

.main {
	padding: 0;
	margin: 0;
	// background: url("../../assets/img/bg-test.png");
	// background-size: 500px;
	// background-repeat: repeat;
	// background-attachment: fixed;
}
.title {
	margin-bottom: 2em;
}
</style>

<script>
import utils from "@/utils/utils"
import IDSection from "@/components/sections/IDSection"
import MapSection from "@/components/sections/MapSection"
import DashboardSection from "@/components/sections/DashboardSection"
import BgIcons from "@/components/utils/BgIcons"

import { login, logOut } from "../../utils/login"

export default {
	components: {
		IDSection,
		MapSection,
		DashboardSection,
		"bg-icons": BgIcons
	},
	created: async function() {
		await this.$store.dispatch("GET_CONNEXIONS_STATUS")
		await this.$store.dispatch("SYNC_DATA")
	}
}
</script>
