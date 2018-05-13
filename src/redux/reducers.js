import authReducer from "./auth/reducer";
import cardsReducer from "./cards/reducer";
import tierListReducer from "./tier-list/reducer";

const rootReducer = {
  auth: authReducer,
  cards: cardsReducer,
  tierLists: tierListReducer
};

export default rootReducer;
