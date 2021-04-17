import AsyncStorage from '@react-native-community/async-storage';
import {
  AUTH_ERROR,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  REGISTER_SUCCESS,
} from '../actions/types';

const initialState = {
  token: AsyncStorage.getItem('token'),
  isAuthenticated: null,
  user: null,
};

export default (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        user: payload,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      console.log('Login Successfull');
      console.log(payload.token);
      return {
        ...state,
        token: payload.token,
        isAuthenticated: true,
      };
    case LOGIN_FAIL:
    case AUTH_ERROR:
      AsyncStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
      };
    case LOGOUT:
      AsyncStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};
