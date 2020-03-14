<template>
	<div class="footer main text-center">
		<span>{{ new Date().getFullYear() }} - ENSTA Paris</span>
	</div>
</template>

<style scoped lang="scss">
.main {
	width: 100%;
	margin: auto;
	color: white;
	span {
		margin: auto;
	}
}

.footer {
	background-color: #2984af;
	position: fixed;
	left: 0;
	bottom: 0;
}
</style>
