import { combineReducers } from "redux";

import treasureReducer from "./treasureReducers";
import trashReducer from "./trashReducers";
import authReducer from "./authReducers";

const rootReducer = combineReducers({
  treasureReducer,
  trashReducer,
  authReducer,
});

export default rootReducer;
