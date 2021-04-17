import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import {setAlert} from './alertAction';
import {loading} from './loadingAction';
import {getProfile} from './profileActions';
import {DESK_STOP} from './types';

export const startUsing = deskID => async dispatch => {
  dispatch(loading(true));
  const token = await AsyncStorage.getItem('token');
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'X-Auth-Token': token,
    },
  };
  const body = JSON.stringify({deskID});
  try {
    await axios.post(
      'https://ideators-server.herokuapp.com/api/desk/startUsing',
      body,
      config,
    );
    dispatch(getProfile());
    dispatch(loading(false));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => {
        dispatch(setAlert(error.msg), 'danger');
      });
    }
    dispatch(loading(false));
  }
};

export const stopUsing = () => async dispatch => {
  dispatch(loading(true));
  const token = await AsyncStorage.getItem('token');
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'X-Auth-Token': token,
    },
  };
  try {
    const res = await axios.post(
      'https://ideators-server.herokuapp.com/api/desk/stopUsing',
      config,
    );
    dispatch({
      type: DESK_STOP,
      payload: res.data,
    });
    dispatch(getProfile());
    dispatch(loading(false));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => {
        dispatch(setAlert(error.msg), 'danger');
      });
    }
    dispatch(loading(false));
  }
};
