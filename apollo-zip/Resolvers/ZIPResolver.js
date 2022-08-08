const ZIPFields = require("../Constants/ZIPFields");

const resolvers = {
  Query: {
    queryZipByCountryAndCode: (_, { country, code }, { dataSources }) => {
      return dataSources.zippotamAPI.getCountry(country, code);
    },
  },
  Country: {
    post_code: (parent) => parent[ZIPFields.post_code],
    country_abbreviation: (parent) => parent[ZIPFields.country_abbreviation],
  },
  Place: {
    place_name: (parent) => parent[ZIPFields.place_name],
    state_abbreviation: (parent) => parent[ZIPFields.state_abbreviation],
  },
};

module.exports = resolvers;
