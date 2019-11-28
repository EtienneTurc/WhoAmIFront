<template>
	<v-app class="app">
		<Menu></Menu>
		<router-view />
	</v-app>
</template>

<style lang="scss" scoped>
.app {

}
</style>

<script>
import Menu from "@/components/Menu"

export default {
	name: "App",
	components: {
		"Menu": Menu
	}
}
</script>
