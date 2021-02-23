import { FETCH_TREASURE } from "../actions/treasureActions";

const initialState = {
  treasures: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TREASURE:
      return {
        ...state,
        treasures: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
