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
		async fetchData(route, params = null, timeout = 5000) {
			try {
				let response = await this.$http.get(route, { params: params })

				// if (response.data.meta && response.data.meta.processing)
				// 	setTimeout(() => this.fetchData(route, params, timeout), timeout);

				console.log(route, response, timeout)
				this.data = response.data.data
			} catch (err) {
				console.log(err)
				return err
			}
		}
	}
}

export { widgetMixin }
