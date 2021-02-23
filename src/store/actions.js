import axios from "axios";
export const FETCH_TREASURE = "FETCH_TREASURE";

export const fetchTreasure = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8000/treasure");
    res.treasure = res;
    dispatch({ type: FETCH_TREASURE, payload: res.data });
  } catch (error) {
    console.error(error);
  }
};
