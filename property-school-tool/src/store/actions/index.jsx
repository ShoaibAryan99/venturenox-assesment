import { SET_SELECTED_DATA } from "../constants";

export const dataAction = (data) => (dispatch) =>
  dispatch({ type: SET_SELECTED_DATA, payload: { data } });
