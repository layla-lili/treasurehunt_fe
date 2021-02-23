import instance from "./instance";
export const FETCH_TRASH = "FETCH_TRASH";

export const fetchTrash = () => async (dispatch) => {
  try {
    const res = await instance.get("/treasure/trash");
    dispatch({ type: FETCH_TRASH, payload: res.data });
  } catch (error) {
    console.error(error);
  }
};
