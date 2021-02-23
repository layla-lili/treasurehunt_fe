import { SET_USER } from "../actions/authActions";
import { LOGOUT } from "../actions/authActions";
const initialState = {
  user: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default reducer;
