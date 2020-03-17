<template>
	<div class="word-cloud">
		<vue-word-cloud :words="words" :color="color" :rotation="rotation" font-family="Anton" />
	</div>
</template>

<script>
import VueWordCloud from "vuewordcloud"
import lodash from "lodash"

export default {
	components: {
		[VueWordCloud.name]: VueWordCloud
	},
	data: () => {
		return {
			words: []
		}
	},
	methods: {
		startGettingWords: async function() {
			window.setInterval(
				async function() {
					let res = await this.$http.get("google/words")
					let words = Object.keys(res.data.words)
					words.forEach(word => {
						if (!this.words.includes(word)) {
							this.$set(this.words, this.words.length, word)
						}
					})
				}.bind(this),
				5000
			)
		},
		color: function() {
			return _.sample(["#2C3E50", "#772D2D", "#0184AF"])
		},
		rotation: function(elt) {
			return _.sample([0, 0, 0.25]) // 1/3 of words will be shifted by 90°
		}
	},
	mounted: async function() {
		this.startGettingWords()
		// this.$set(this.words, this.words.length, "bla")
	}
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Anton&display=swap");

.word-cloud {
	width: 500px;
	height: 200px;
	/* max-height: 200px;
	min-height: 200px; */
}
</style>
