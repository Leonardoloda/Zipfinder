import React from "react";
import { Country } from "./CountriesContext.types";

export const CountriesContext = React.createContext<Array<Country>>([]);
