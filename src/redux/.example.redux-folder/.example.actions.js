import { callApi } from "../middleware";
import * as constants from "../../constants";

// Redux action that does not hit the API
export const exampleLocalAction = () =>
  // Make sure to define the EXAMPLE_LOCAL_ACTION constant in the constants/actionTypes.js
  ({ type: constants.EXAMPLE_LOCAL_ACTION, payload: [] });

// Redux action that hits the API
export const exampleApiAction = params => {
  const requestInfo = {
    method: "POST",
    body: JSON.stringify({ params: params })
  };

  return callApi(
    `api/tier_lists/${tierId}`,
    constants.EXAMPLE_API_ACTION,
    requestInfo,
    params
  );
};
