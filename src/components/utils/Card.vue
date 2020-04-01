<template>
	<v-card class="card-margin">
		<v-card-title class="bg-title flex-b">
			<span>
				<slot name="title">Mon titre</slot>
			</span>
			<span style="display: flex">
				<slot name="icons">
					<v-img src="@/assets/img/google_logo.png" class="mr-4" max-width="30px"></v-img>
					<v-img src="@/assets/img/fb_icon.png" max-width="30px"></v-img>
				</slot>
			</span>
		</v-card-title>
		<v-divider></v-divider>
		<v-card-text>
			<slot name="component"></slot>
		</v-card-text>
	</v-card>
</template>


<style>
.card-margin {
	margin: 20px;
	height: fit-content;
}

.bg-title {
	background-color: #2c3e50;
	color: white;
}

.flex-b {
	display: flex;
	justify-content: space-between;
}
</style>
