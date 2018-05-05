import { callApi, toQueryString } from "../middleware";
import * as constants from "../../constants";

export const fetchTierListTypes = (params = {}) => {
  const requestInfo = {
    method: "GET"
  };

  const { listTypeId = null, offset = 0, limit = 10 } = params;
  const queryString = toQueryString({
    list_type_id: listTypeId,
    offset,
    limit
  });

  return callApi(
    `api/tier_list_types${queryString}`,
    constants.FETCH_TIER_LIST_TYPES,
    requestInfo
  );
};

export const fetchTierLists = params => {
  const requestInfo = {
    method: "GET"
  };

  const queryString = toQueryString(params);

  return callApi(
    `api/tier_lists${queryString}`,
    constants.FETCH_TIER_LISTS,
    requestInfo
  );
};
