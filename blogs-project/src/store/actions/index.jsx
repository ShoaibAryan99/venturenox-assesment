import {
  FETCH_LOADING,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  BLOG_SUCCESS,
} from "../constants";

const apiUrl = "https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/";

export const blogsAction = () => async (dispatch) => {
  dispatch({ type: FETCH_LOADING });

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    dispatch({ type: FETCH_SUCCESS, payload: { data } });
  } catch (error) {
    dispatch({
      type: FETCH_FAILURE,
      payload: error?.message || "Something went wrong!",
    });
  }
};

export const singleBlogAction = (id) => async (dispatch) => {
  dispatch({ type: FETCH_LOADING });

  try {
    const response = await fetch(`${apiUrl}${id}`);
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const singleResult = await response.json();
    dispatch({ type: BLOG_SUCCESS, payload: { singleResult, id } });
  } catch (error) {
    dispatch({
      type: FETCH_FAILURE,
      payload: "Invalid Id! or Something went wrong!",
    });
  }
};
