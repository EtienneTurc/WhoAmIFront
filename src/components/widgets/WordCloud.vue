<template>
	<div class="word-cloud">
		<vue-word-cloud
			:words="words"
			:color="color"
			:rotation="rotation"
			font-family="Anton"
			:font-size-ratio="5"
			:spacing="0.5"
		/>
	</div>
</template>

<script>
import VueWordCloud from "vuewordcloud"
import lodash from "lodash"
import { widgetMixin } from "../../utils/widgetMixin"

export default {
	mixins: [widgetMixin],
	components: {
		[VueWordCloud.name]: VueWordCloud
	},
	data: () => {
		return {
			words: []
		}
	},
	methods: {
		color: function() {
			return _.sample(["#2C3E50", "#772D2D", "#0184AF"])
		},
		rotation: function(elt) {
			return _.sample([0, 0, 0.25]) // 1/3 of words will be shifted by 90°
		}
	},
	watch: {
		data() {
			if (this.data.words) {
				let words = Object.keys(this.data.words.data)
				words.forEach(word => {
					if (!this.words.includes(word)) {
						this.$set(this.words, this.words.length, [
							word,
							this.data.words.data[word]
						])
					}
				})
			}
		}
	},
	mounted: async function() {
		this.$_widgetMixin_fetchData("/component/words")
	}
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Anton&display=swap");

.word-cloud {
	width: 500px;
	height: 200px;
	margin: auto;
	/* max-height: 200px;
	min-height: 200px; */
}
</style>
