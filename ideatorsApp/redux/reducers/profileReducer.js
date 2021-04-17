import {CREATE_MYPROFILE, GET_MYPROFILE} from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case CREATE_MYPROFILE:
    case GET_MYPROFILE:
      return {
        ...state,
        ...payload,
      };
    default:
      return {
        ...state,
      };
  }
};
