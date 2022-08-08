const { gql } = require("apollo-server");

const typeDefs = gql`
  type Country {
    post_code: String
    country: String
    country_abbreviation: String
    places: [Place]
  }

  type Place {
    place_name: String
    longitude: String
    latitude: String
    state: String
    state_abbreviation: String
  }

  type Query {
    queryZipByCountryAndCode(country: String!, code: String!): Country
  }
`;

module.exports = typeDefs;
