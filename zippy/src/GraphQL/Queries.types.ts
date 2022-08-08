export interface Place {
  place_name: string;
  longitude: string;
  latitude: string;
  state: string;
  state_abbreviation: string;
}

export interface QueryZipResponse {
  queryZipByCountryAndCode: QueryZipTypes;
}

export interface QueryZipTypes {
  post_code: string;
  country: string;
  country_abbreviation: string;
  places: [Place];
}

export interface QueryZipVariables {
  code: string;
  country: string;
}
