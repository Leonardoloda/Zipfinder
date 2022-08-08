import React, { FormEvent, useContext, useState } from "react";
import { CountriesContext } from "../../../Context/CountriesContext";
import {
  every,
  lessThanNDigits,
  positiveNumber,
} from "../../../Utils/Validators";
import { FormProps } from "./Form.types";

import "./Form.scss";

export const Form: React.FC<FormProps> = ({ searchZipCode }) => {
  const [zip, setZip] = useState(0);
  const [country, setCountry] = useState("us");
  const countries = useContext(CountriesContext);

  const lessThan7Digits = lessThanNDigits(7);

  const zipHandler = (event: FormEvent<HTMLInputElement>) => {
    const number = parseFloat(event.currentTarget.value);

    if (every(positiveNumber, lessThan7Digits)(number)) setZip(number);
  };

  const countryHandler = (e: FormEvent<HTMLSelectElement>): void => {
    setCountry(e.currentTarget.value);
  };

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    searchZipCode(zip.toString(), country);
  };

  return (
    <form onSubmit={submitForm} className="form">
      <div className="form__fields">
        <label htmlFor="zip">Zip:</label>
        <input
          type="number"
          name="zip"
          id="zip"
          required
          className="form__input"
          onChange={zipHandler}
          value={zip}
        />

        <label htmlFor="country">Country: </label>
        <select
          name="country"
          id="country"
          required
          className="form__input"
          onChange={countryHandler}
          value={country}
        >
          {countries.map(({ value, label }) => (
            <option value={value} key={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <button className="form__submit" type="submit">
        Search
      </button>
    </form>
  );
};
