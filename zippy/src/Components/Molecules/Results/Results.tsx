import React from "react";
import { Place, QueryZipTypes } from "../../../GraphQL/Queries.types";
import { ResultsProps } from "./Results.types";

import "./Results.scss";

export const Results: React.FC<ResultsProps> = ({ addresses }) => {
  return (
    <ol className="results">
      {addresses.map((address: QueryZipTypes, index: number) => (
        <li className="results__item" key={`${address.post_code}-${index}`}>
          <p>
            Country:{`${address.country} (${address.country_abbreviation})`}
            <br></br>
            {address.places.map(
              (place: Place) =>
                `${place.place_name} - ${place.state}(${place.state_abbreviation})`
            )}
          </p>
        </li>
      ))}
    </ol>
  );
};
