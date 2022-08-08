import { gql } from "@apollo/client";

export const queryZip = gql`
  query ZipFinder($code: String!, $country: String!) {
    queryZipByCountryAndCode(code: $code, country: $country) {
      places {
        longitude
        latitude
        state
        state_abbreviation
        place_name
      }
      post_code
      country
      country_abbreviation
    }
  }
`;
