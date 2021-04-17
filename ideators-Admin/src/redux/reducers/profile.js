import {
  GET_CURRENT_PROFILE,
  GET_ALL_PROFILE,
  PROFILE_ERROR,
} from "../actions/types";

const initialState = {
  profile: {},
  profiles: [],
  loading: true,
  error: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CURRENT_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    case GET_ALL_PROFILE:
      return {
        ...state,
        profiles: payload,
        loading: false,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        profile: {},
      };
    default:
      return state;
  }
};
