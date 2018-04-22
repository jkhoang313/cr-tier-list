import { callApi } from "../middleware";
import * as constants from "../../constants";

export const fetchUser = () => {
  const requestInfo = {
    method: "GET"
  };

  return callApi(`api/get_user`, constants.FETCH_USER, requestInfo);
};

export const login = params => {
  // params = { email_address, password };
  const requestInfo = {
    method: "POST",
    body: JSON.stringify(params)
  };

  return callApi(`api/login`, constants.LOGIN, requestInfo, params);
};

export const signup = params => {
  // params = { email_address, first_name, last_name, password, password_confirmation };
  const requestInfo = {
    method: "POST",
    body: JSON.stringify(params)
  };

  return callApi(`api/user`, constants.SIGNUP, requestInfo, params);
};

export const resetPassword = params => {
  // params = { email_address };
  const requestInfo = {
    method: "POST",
    body: JSON.stringify(params)
  };

  return callApi(
    `api/reset_password`,
    constants.RESET_PASSWORD,
    requestInfo,
    params
  );
};

export const updateUser = params => {
  // params = { current_password, new_password };
  const requestInfo = {
    method: "PUT",
    body: JSON.stringify(params)
  };

  return callApi(`api/user`, constants.UPDATE_USER, requestInfo);
};

export const logout = () => ({ type: constants.LOGOUT });

export const clearErrors = () => ({ type: constants.CLEAR_ERRORS });
