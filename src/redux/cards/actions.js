import { callApi } from "../middleware";
import * as constants from "../../constants";

export const fetchCards = () => {
  const requestInfo = {
    method: "GET"
  };

  return callApi(`api/cards`, constants.FETCH_CARDS, requestInfo);
};
