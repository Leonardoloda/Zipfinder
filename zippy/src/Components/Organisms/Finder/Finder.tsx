import { ApolloError, useLazyQuery } from "@apollo/client";
import React, { useReducer, useState } from "react";
import { queryZip } from "../../../GraphQL/Queries";
import {
  QueryZipResponse,
  QueryZipTypes,
  QueryZipVariables,
} from "../../../GraphQL/Queries.types";
import { Form } from "../../Molecules/Form/Form";
import { Results } from "../../Molecules/Results/Results";
import { Action } from "./Finder.types";

import "./Finder.scss";

const reducer = (
  state: Array<QueryZipTypes>,
  action: Action
): Array<QueryZipTypes> => {
  switch (action.type) {
    case "ADD":
      return state.length < 5
        ? [...state, action.payload]
        : [...state.slice(1, state.length), action.payload];
    default:
      return state;
  }
};

export const Finder: React.FC<{}> = () => {
  const [getZipinfo] = useLazyQuery<QueryZipResponse, QueryZipVariables>(
    queryZip
  );
  const [error, setError] = useState<ApolloError | null>(null);
  const [addresses, dispatch] = useReducer(reducer, [] as QueryZipTypes[]);

  const searchZipCode = async (code: string, country: string) => {
    const { error, data } = await getZipinfo({
      variables: { code, country },
    });

    if (error) setError(error);
    if (data) {
      dispatch({ type: "ADD", payload: data.queryZipByCountryAndCode });
      setError(null);
    }
  };

  return (
    <>
      <Form searchZipCode={searchZipCode} />
      {error && <p className="error">{error.message}</p>}
      <Results addresses={addresses} />
    </>
  );
};
