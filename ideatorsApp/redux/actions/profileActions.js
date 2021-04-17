import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import {CREATE_MYPROFILE, GET_MYPROFILE} from './types';
import {loading} from './loadingAction';

export const createProfile = () => async dispatch => {
  dispatch(loading(true));
  const token = await AsyncStorage.getItem('token');

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'X-Auth-Token': token,
    },
  };
  try {
    const res = await axios.post(`https://ideators-server.herokuapp.com/api/profile/`, config);
    dispatch({
      type: CREATE_MYPROFILE,
      payload: res.data,
    });
    dispatch(loading(false));
  } catch (err) {
    console.log('error from createProfile: ', err.message);
    dispatch(loading(false));
  }
};

export const getProfile = () => async dispatch => {
    dispatch(loading(true));
  const token = await AsyncStorage.getItem('token');

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'X-Auth-Token': token,
    },
  };
  try {
    const res = await axios.get(`https://ideators-server.herokuapp.com/api/profile/me`, config);
    dispatch({
      type: GET_MYPROFILE,
      payload: res.data,
    });
    dispatch(loading(false));
  } catch (err) {
    console.log('error from createProfile: ', err.message);
    dispatch(loading(false));
  }
}