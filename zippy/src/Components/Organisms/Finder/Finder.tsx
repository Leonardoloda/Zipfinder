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
import { HistoryConstants } from "../../../Constants/HistoryConstants";

const reducer = (
  state: Array<QueryZipTypes>,
  action: Action
): Array<QueryZipTypes> => {
  switch (action.type) {
    case HistoryConstants.ADD:
      if(!action.payload)
        throw new Error("Payload required")

      return state.length < 5
        ? [...state, action.payload]
        : [...state.slice(1, state.length), action.payload];
    case HistoryConstants.CLEAR:
      return [];
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
      dispatch({ type: HistoryConstants.ADD, payload: data.queryZipByCountryAndCode });
      setError(null);
    }
  };

  const clearHistory = () => {
    dispatch({ type: HistoryConstants.CLEAR })
  }

  return (
    <>
      <Form searchZipCode={searchZipCode} clearHistory={clearHistory} />
      {error && <p className="error">{error.message}</p>}
      <Results addresses={addresses} />
    </>
  );
};
