import React, { ReactNode } from "react";
import { fireEvent, render } from "@testing-library/react";
import { Form } from "./Form";
import { CountriesContext } from "../../../Context/CountriesContext";

describe("<Form/ >", () => {
  const withContext = (component: ReactNode) => {
    const countries = [{ value: "USA", label: "US" }];
    return (
      <CountriesContext.Provider value={countries}>
        {component}
      </CountriesContext.Provider>
    );
  };

  it("should submit a code and country", () => {
    const searchZipCode = jest.fn();
    const screen = render(withContext(<Form searchZipCode={searchZipCode} />));

    const zipInput = screen.getByRole("spinbutton");
    const countryInput = screen.getByRole("combobox");
    const submit = screen.getByRole("button");

    fireEvent.change(zipInput, { target: { value: 90210 } });
    fireEvent.change(countryInput, { target: { value: "USA" } });

    fireEvent.click(submit);

    expect(searchZipCode).toHaveBeenCalledWith("90210", "USA");
  });
});
