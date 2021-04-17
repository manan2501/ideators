import {SET_ALERT} from './types';

export const setAlert = (msg, alertType = null) => dispatch => {
  const id = Math.random().toString();
  dispatch({
    type: SET_ALERT,
    payload: {msg, alertType, id},
  });
};
