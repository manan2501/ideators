import { GET_ALL_DESK, DESK_ERROR } from "../actions/types";

const initialState = {
  desks: [],
  loading: true,
  error: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_DESK:
      return {
        ...state,
        desks: payload,
        loading: false,
      };
    case DESK_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};
