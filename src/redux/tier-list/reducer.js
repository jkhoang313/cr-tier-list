import { fromJS } from "immutable";

import * as constants from "../../constants";

const initialState = fromJS({
  filterTypes: [],
  isFetchingTierLists: false,
  tierLists: [],
  totalTierLists: 0
});

const handleFetchTierListTypesSuccess = (state, action) => {
  return state.set("filterTypes", fromJS(action.payload));
};

const handleFetchTierListsRequest = state => {
  return state.set("isFetchingTierLists", true);
};

const handleFetchTierListsFailure = state => {
  return state.set("isFetchingTierLists", false);
};

const handleFetchTierListsSuccess = (state, action) => {
  return state
    .set("isFetchingTierLists", false)
    .set("tierLists", fromJS(action.payload.tier_lists))
    .set("totalTierLists", fromJS(action.payload.total_tier_lists));
};

const actionHandler = {
  [constants.FETCH_TIER_LIST_TYPES.SUCCESS]: handleFetchTierListTypesSuccess,
  [constants.FETCH_TIER_LISTS.REQUEST]: handleFetchTierListsRequest,
  [constants.FETCH_TIER_LISTS.FAILURE]: handleFetchTierListsFailure,
  [constants.FETCH_TIER_LISTS.SUCCESS]: handleFetchTierListsSuccess
};

export default function(state = initialState, action) {
  if (action.type === constants.LOGOUT) {
    sessionStorage.removeItem(constants.SESSION_AUTH_KEY);

    return initialState;
  } else if (actionHandler.hasOwnProperty(action.type)) {
    return actionHandler[action.type](state, action);
  } else {
    return state;
  }
}
