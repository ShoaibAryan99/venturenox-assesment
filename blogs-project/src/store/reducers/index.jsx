import {
  FETCH_LOADING,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  BLOG_SUCCESS,
} from "../constants";

const initialState = {
  loading: false,
  error: null,
  data: [],
  blogView: {},
  singleResult: {},
};

export const blogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOADING:
      return { ...state, loading: true, error: null };

    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        error: null,
      };

    case FETCH_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case BLOG_SUCCESS:
      return {
        ...state,
        loading: false,
        singleResult: action.payload.singleResult,
        error: null,
        blogView: {
          ...state.blogView,
          [action.payload.id]: state.blogView[action.payload.id]
            ? state.blogView[action.payload.id] + 1
            : 1,
        },
      };

    default:
      return state;
  }
};
