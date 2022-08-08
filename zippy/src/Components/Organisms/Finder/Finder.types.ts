import { QueryZipTypes } from "../../../GraphQL/Queries.types";

export type ActionType = "ADD";

export interface Action {
  type: ActionType;
  payload: QueryZipTypes;
}
