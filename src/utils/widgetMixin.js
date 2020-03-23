const widgetMixin = {
	data() {
		return {
			data: null,
			meta: {}
		}
	},
	// mounted() {
	// 	this.fetch()
	// },
	methods: {
		async fetchData(route, params = null) {
			let response = await this.$http.get(route, { params: params })
			console.log(route, response)
			return response.data
		}
	}
}

export { widgetMixin }
