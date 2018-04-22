import { createResponseTypes } from "../redux/middleware";

// Authentication
export const FETCH_USER = createResponseTypes("FETCH_USER");
export const LOGIN = createResponseTypes("LOGIN");
export const SIGNUP = createResponseTypes("SIGNUP");
export const RESET_PASSWORD = createResponseTypes("RESET_PASSWORD");
export const UPDATE_USER = createResponseTypes("UPDATE_USER");
export const LOGOUT = "LOGOUT";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

// Tier List Types
export const FETCH_TIER_LIST_TYPES = createResponseTypes(
  "FETCH_TIER_LIST_TYPES"
);
