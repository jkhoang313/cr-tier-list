import { fromJS } from "immutable";

import * as constants from "../../constants";

const initialState = fromJS({
  isFetchingCards: false,
  cards: []
});

const handleFetchCardsRequest = state => {
  return state.set("isFetchingCards", true);
};

const handleFetchCardsFailure = state => {
  return state.set("isFetchingCards", false);
};

const handleFetchCardsSuccess = (state, action) => {
  return state
    .set("isFetchingCards", false)
    .set("cards", fromJS(action.payload));
};

const actionHandler = {
  [constants.FETCH_CARDS.REQUEST]: handleFetchCardsRequest,
  [constants.FETCH_CARDS.FAILURE]: handleFetchCardsFailure,
  [constants.FETCH_CARDS.SUCCESS]: handleFetchCardsSuccess
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
