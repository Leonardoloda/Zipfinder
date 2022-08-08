const { Query, Country, Place } = require("./ZIPResolver");

describe("ZIPResolver", () => {
  const country = "USA";
  const code = "12313";
  const ctx = {
    dataSources: {
      zippotamAPI: {
        getCountry: jest.fn(),
      },
    },
  };
  const response = {
    "post code": "90210",
    country: "United States",
    "country abbreviation": "US",
    places: [
      {
        "place name": "Beverly Hills",
        longitude: "-118.4065",
        state: "California",
        "state abbreviation": "CA",
        latitude: "34.0901",
      },
    ],
  };

  it("should return a zippopotam call", async () => {
    Query.queryZipByCountryAndCode(null, { country, code }, ctx);

    expect(ctx.dataSources.zippotamAPI.getCountry).toHaveBeenCalledWith(country, code);
  });

  it("should return a post code", () => {
    expect(Country.post_code(response)).toEqual(response["post code"]);
  });

  it("should return a country abbreviation", () => {
    expect(Country.country_abbreviation(response)).toEqual(response["country abbreviation"]);
  });

  it("should return a place name", () => {
    expect(Place.place_name(response)).toEqual(response["place name"]);
  });

  it("should return a state abbreviation", () => {
    expect(Place.state_abbreviation(response)).toEqual(response["state abbreviation"]);
  });
});
