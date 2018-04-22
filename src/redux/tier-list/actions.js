import { callApi } from "../middleware";
import * as constants from "../../constants";

export const fetchTierListTypes = () => {
  const requestInfo = {
    method: "GET"
  };

  return callApi(
    `api/tier_list_types`,
    constants.FETCH_TIER_LIST_TYPES,
    requestInfo
  );
};

export const fetchTierLists = () => {
  const requestInfo = {
    method: "GET"
  };

  return callApi(`api/tier_lists`, constants.FETCH_TIER_LISTS, requestInfo);
};