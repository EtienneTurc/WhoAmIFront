<template>
	<div class="widget-placeholder container">
		<card>
			<template v-slot:title>Ma carte d'idendité</template>
			<template v-slot:icons>
				<v-img src="@/assets/img/google_logo.png" class="mr-4" max-width="30px"></v-img>
				<v-img src="@/assets/img/fb_icon.png" max-width="30px"></v-img>
			</template>
			<template v-slot:component>
				<ID></ID>
			</template>
		</card>
		<card>
			<template v-slot:title>Mes positions</template>
			<template v-slot:icons>
				<v-img src="@/assets/img/google_logo.png" max-width="30px"></v-img>
			</template>
			<template v-slot:component>
				<Map></Map>
			</template>
		</card>
		<card>
			<template v-slot:title>Graph</template>
			<template v-slot:icons>
				<v-img src="@/assets/img/google_logo.png" max-width="30px"></v-img>
			</template>
			<template v-slot:component>
				<Dashboard></Dashboard>
			</template>
		</card>
		<card>
			<template v-slot:title>Mes centres d'intérêts</template>
			<template v-slot:icons>
				<v-img src="@/assets/img/google_logo.png" max-width="30px"></v-img>
			</template>
			<template v-slot:component>
				<WordCloud></WordCloud>
			</template>
		</card>
	</div>
</template>

<script>
import Card from "../utils/Card"
import ID from "../widgets/ID"
import Map from "../widgets/Map"
import Dashboard from "../widgets/Dashboard"
import WordCloud from "../widgets/WordCloud"

import { login, logOut } from "../../utils/login"

export default {
	components: {
		Card,
		ID,
		Map,
		Dashboard,
		WordCloud
	},
	created: async function() {
		await this.$store.dispatch("GET_CONNEXIONS_STATUS")
		await this.$store.dispatch("SYNC_DATA")
	}
}
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Fugaz+One&display=swap");

.widget-placeholder {
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	flex-wrap: wrap;
	// flex: 0 0 100%;
	flex-shrink: 0;
	flex-grow: 1;
}

.widget-placeholder > * {
	flex-grow: 1;
}

.container {
	max-width: 1300px;
	margin: auto;
	margin-bottom: 25px;
}
</style>
