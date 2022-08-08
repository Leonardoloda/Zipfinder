const { RESTDataSource } = require("apollo-datasource-rest");

class ZippopotamApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ZIPPOPOTAMUS_API;
  }

  async getCountry(country, code) {
    return this.get(`${country}/${code}`);
  }
}

module.exports = ZippopotamApi;
