import { SET_SELECTED_DATA } from "../constants";
import { dummyData } from "../dummy";
const initialState = {
  data: dummyData,
};

export const tablesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_DATA:
      return {
        data: action.payload.data,
      };

    default:
      return state;
  }
};
