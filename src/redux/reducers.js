import authReducer from "./auth/reducer";
import tierListReducer from "./tier-list/reducer";

const rootReducer = {
  auth: authReducer,
  tierLists: tierListReducer
};

export default rootReducer;
