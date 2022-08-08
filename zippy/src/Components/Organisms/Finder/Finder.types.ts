import { HistoryConstants } from "../../../Constants/HistoryConstants";
import { QueryZipTypes } from "../../../GraphQL/Queries.types";

export interface Action {
  type: HistoryConstants;
  payload?: QueryZipTypes;
}
