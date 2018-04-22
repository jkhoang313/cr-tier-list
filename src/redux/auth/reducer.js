import { fromJS } from "immutable";

import * as constants from "../../constants";

const initialState = fromJS({
  currentUser: {},
  isFetchingUser: false,
  login: {
    isSubmittingLogin: false
  },
  registration: {
    isSubmittingSignup: false
  },
  resetPassword: {
    isSubmittingResetPW: false
  },
  updateUser: {
    isSubmittingUpdate: false
  }
});

const handlefetchUserRequest = state => {
  return state.set("currentUser", fromJS({})).set("isFetchingUser", true);
};

const handlefetchUserFailure = state => {
  sessionStorage.removeItem(constants.SESSION_AUTH_KEY);

  return state.set("currentUser", fromJS({})).set("isFetchingUser", false);
};

const handlefetchUserSuccess = (state, action) => {
  return state
    .set("currentUser", fromJS(action.payload))
    .set("isFetchingUser", false);
};

const handleLoginRequest = state => {
  return state.set(
    "login",
    fromJS({
      isSubmittingLogin: true
    })
  );
};

const handleLoginFailure = (state, action) => {
  return state.set(
    "login",
    fromJS({
      loginError: action.payload.error
    })
  );
};

const handleLoginSuccess = (state, action) => {
  const { jwt, user } = action.payload;

  sessionStorage.setItem(constants.SESSION_AUTH_KEY, jwt);

  return state.set("login", fromJS({})).set("currentUser", fromJS(user));
};

const handleSignupRequest = state => {
  return state.set(
    "registration",
    fromJS({
      isSubmittingSignup: true
    })
  );
};

const handleSignupFailure = (state, action) => {
  return state.set(
    "registration",
    fromJS({
      signupError: action.payload.error
    })
  );
};

const handleSignupSuccess = (state, action) => {
  const { jwt, user } = action.payload;

  sessionStorage.setItem(constants.SESSION_AUTH_KEY, jwt);

  return state.set("registration", fromJS({})).set("currentUser", fromJS(user));
};

const handleResetPWRequest = state => {
  return state.set(
    "resetPassword",
    fromJS({
      isSubmittingResetPW: true
    })
  );
};

const handleResetPWFailure = (state, action) => {
  return state.set(
    "resetPassword",
    fromJS({
      success: false,
      statusMsg: action.payload.error
    })
  );
};

const handleResetPWSuccess = (state, action) => {
  return state.set(
    "resetPassword",
    fromJS({
      success: true,
      statusMsg: action.payload.success
    })
  );
};

const handleUpdateUserRequest = state => {
  return state.set(
    "updateUser",
    fromJS({
      isSubmittingUpdate: true
    })
  );
};

const handleUpdateUserFailure = (state, action) => {
  return state.set(
    "updateUser",
    fromJS({
      success: false,
      updateUserError: action.payload.error
    })
  );
};

const handleUpdateUserSuccess = (state, action) => {
  return state.set("currentUser", fromJS(action.payload)).set(
    "updateUser",
    fromJS({
      success: true,
      updateUserError: "Settings was successfully updated!"
    })
  );
};

const handleClearErrors = state => {
  return state
    .set("login", fromJS({}))
    .set("registration", fromJS({}))
    .set("resetPassword", fromJS({}))
    .set("updateUser", fromJS({}));
};

const actionHandler = {
  [constants.FETCH_USER.REQUEST]: handlefetchUserRequest,
  [constants.FETCH_USER.FAILURE]: handlefetchUserFailure,
  [constants.FETCH_USER.SUCCESS]: handlefetchUserSuccess,
  [constants.LOGIN.REQUEST]: handleLoginRequest,
  [constants.LOGIN.FAILURE]: handleLoginFailure,
  [constants.LOGIN.SUCCESS]: handleLoginSuccess,
  [constants.SIGNUP.REQUEST]: handleSignupRequest,
  [constants.SIGNUP.FAILURE]: handleSignupFailure,
  [constants.SIGNUP.SUCCESS]: handleSignupSuccess,
  [constants.RESET_PASSWORD.REQUEST]: handleResetPWRequest,
  [constants.RESET_PASSWORD.FAILURE]: handleResetPWFailure,
  [constants.RESET_PASSWORD.SUCCESS]: handleResetPWSuccess,
  [constants.UPDATE_USER.REQUEST]: handleUpdateUserRequest,
  [constants.UPDATE_USER.FAILURE]: handleUpdateUserFailure,
  [constants.UPDATE_USER.SUCCESS]: handleUpdateUserSuccess,
  [constants.CLEAR_ERRORS]: handleClearErrors
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
