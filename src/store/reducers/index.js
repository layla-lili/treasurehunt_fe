import { combineReducers } from "redux";

import treasureReducer from "./treasureReducers";
import trashReducer from "./trashReducers";

const rootReducer = combineReducers({
  treasureReducer,
  trashReducer,
});

export default rootReducer;
