import { FETCH_TRASH } from "../actions/trashActions";

const initialState = {
  trashes: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRASH:
      return {
        ...state,
        trashes: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
