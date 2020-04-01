const widgetMixin = {
  data() {
    return {
      data: null,
      meta: {}
    };
  },
  // computed: {
  //   anySourceProcessing() {
  //     Object.values(meta.processing).forEach(val => {
  //       if (val) {
  //         return true;
  //       }
  //     });
  //     return false;
  //   }
  // },
  methods: {
    async $_widgetMixin_fetchData(route, params = null, timeout = 5000) {
      try {
        let response = await this.$http.get(route, { params: params });

        if (response.data.meta && response.data.meta.processing)
          setTimeout(() => {
            this.$_widgetMixin_fetchData(route, params, timeout);
          }, timeout);

        console.log("Fetching:", route);
        this.data = response.data.data;

        this.meta = response.data.meta;
      } catch (err) {
        console.log(err);
        return err;
      }
    }
  }
};

export { widgetMixin };
