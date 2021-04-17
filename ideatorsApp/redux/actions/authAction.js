import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import setAuthToken from '../setAuthToken';
import {
  AUTH_ERROR,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  // CLEAR_PROFILE,
} from './types';
import {setAlert} from './alertAction';
import {loading} from './loadingAction';
import {createProfile} from './profileActions';

//Load User
export const loadUser = () => async dispatch => {
  // set header
  dispatch(loading(true));
  const token = await AsyncStorage.getItem('token');
  if (token !== null) {
    setAuthToken(token);
  }

  try {
    const res = await axios.get(
      'https://ideators-server.herokuapp.com/api/auth',
    );
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
    dispatch(loading(false));
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
    dispatch(loading(false));
  }
};

// Login User
export const login = (email, password) => async dispatch => {
  dispatch(loading(true));
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({email, password});
  try {
    const res = await axios.post(
      'https://ideators-server.herokuapp.com/api/auth',
      body,
      config,
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    await AsyncStorage.setItem('token', res.data.token);
    // setAuthToken(res.data);
    dispatch(loadUser());
    dispatch(loading(false));
  } catch (err) {
    const errors = err.response.data.errors; // This errors will come from backend
    // that we setted as errors.array
    if (errors) {
      errors.forEach(error => {
        dispatch(setAlert(error.msg, 'danger'));
      });
    }
    dispatch({
      type: LOGIN_FAIL,
    });
    dispatch(loading(false));
  }
};

//Register User
export const register = (name, email, password) => async dispatch => {
  dispatch(loading(true));
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({name, email, password});
  try {
    const res = await axios.post(
      `https://ideators-server.herokuapp.com/api/signup`,
      body,
      config,
    );
    await AsyncStorage.setItem('token', res.data.token);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    dispatch(createProfile());
    dispatch(loadUser());
    dispatch(loading(false));
  } catch (err) {
    const errors = err.response.data.errors;
    // this errors are the errors send form the backend
    if (errors) {
      errors.forEach(error => {
        dispatch(setAlert(error.msg, 'danger'));
      });
    }
    dispatch(loading(false));
  }
};

// Logout
export const logout = () => ({type: LOGOUT});
