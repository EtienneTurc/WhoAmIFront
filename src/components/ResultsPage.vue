<template>
    <div class="main">
		<v-container fluid align-content-center >
			<v-layout justify-center row>
				<v-tabs background-color="c_secondary" color="white" :grow="true" icons-and-text>
					
					<v-tabs-slider color="c_orange"></v-tabs-slider>
					<v-tab :href="'#tab_basic_info'">
						Basic information
						<v-icon>mdi-account</v-icon>
					</v-tab>
					
					<v-tab :href="'#tab_calendar'">
						Calendar
						<v-icon>mdi-calendar</v-icon>
					</v-tab>
					
					<v-tab-item :value="'tab_basic_info'">
						<BasicInfo></BasicInfo>
					</v-tab-item>

					<v-tab-item :value="'tab_calendar'">
						<Calendar></Calendar>
					</v-tab-item>
				</v-tabs>
			</v-layout>
		</v-container>
    </div>
    


</template>

<style lang="scss" scoped>
.main {
	margin-left: 5em;
	margin-right: 5em;
}
</style>


<script>
import utils from "../utils/utils"
import BasicInfo from "@/components/tabs/BasicInfo"
import Calendar from "@/components/tabs/Calendar"

export default {
	components: {
		BasicInfo: BasicInfo,
		Calendar: Calendar
	},
}
</script>

