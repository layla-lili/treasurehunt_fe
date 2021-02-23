import instance from "./instance";
export const FETCH_TREASURE = "FETCH_TREASURE";

export const fetchTreasure = () => async (dispatch) => {
  try {
    const res = await instance.get("/treasure");
    dispatch({ type: FETCH_TREASURE, payload: res.data });
  } catch (error) {
    console.error(error);
  }
};
