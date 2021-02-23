import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { fetchTreasure } from "./actions/treasureActions";
import { fetchTrash } from "./actions/trashActions";
import { checkToken } from "./actions/authActions";
import reducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(fetchTreasure());
store.dispatch(fetchTrash());
store.dispatch(checkToken());

export default store;
