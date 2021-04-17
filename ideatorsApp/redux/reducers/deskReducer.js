import {DESK_STOP, GET_ALL_DESK} from '../actions/types';

const initalState = {bill: null, desks: null};

export default (state = initalState, action) => {
  const {type, payload} = action;

  switch (type) {
    case DESK_STOP:
      return {
        ...state,
        bill: payload,
      };
    case GET_ALL_DESK:
      return {
        ...state,
        desks: payload,
      };
    default:
      return state;
  }
};
