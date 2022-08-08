import React from "react";
import { CountriesContext } from "../../../Context/CountriesContext";
import { Finder } from "../../Organisms/Finder/Finder";

import "./Lookup.scss";

const Lookup = () => {
  const countries = [
    {
      value: "US",
      label: "USA",
    },
    {
      value: "DE",
      label: "Germany",
    },
  ];

  return (
    <div className="lookup-page">
      <CountriesContext.Provider value={countries}>
        <header className="lookup-page__header">
          <h1>Lookup</h1>
        </header>
        <main>
          <Finder />
        </main>
      </CountriesContext.Provider>
    </div>
  );
};

export { Lookup };
