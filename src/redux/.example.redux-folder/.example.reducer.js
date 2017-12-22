import { fromJS } from "immutable";

import * as constants from "../../constants";

// Create the initial state here
const initialState = fromJS({
  example: "example"
});

// Create the event handlers here
const handleExampleLocalAction = (state, action) => {
  return state.set("example", "local example");
};

const handleExampleLocalActionRequest = (state, action) => {
  return state.set("example", "request");
};

const handleExampleLocalActionFailure = (state, action) => {
  return state.set("example", "failure");
};

const handleExampleLocalActionSuccess = (state, action) => {
  return state.set("example", fromJS(action.payload));
};

// Match the action types with the event handlers here
const actionHandler = {
  [constants.EXAMPLE_LOCAL_ACTION]: handleExampleLocalAction,
  [constants.EXAMPLE_API_ACTION.REQUEST]: handleExampleLocalActionRequest,
  [constants.EXAMPLE_API_ACTION.FAILURE]: handleExampleLocalActionFailure,
  [constants.EXAMPLE_API_ACTION.SUCCESS]: handleExampleLocalActionSuccess
};

export default function(state = initialState, action) {
  if (actionHandler.hasOwnProperty(action.type)) {
    return actionHandler[action.type](state, action);
  } else {
    return state;
  }
}
