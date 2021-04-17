import {combineReducers} from 'redux';
import authReducer from './authReducer';
import alertReducer from './alertReducer';
import loadingReducer from './loadingReducer';
import profileReducer from './profileReducer';
import deskReducer from './deskReducer';

export default combineReducers({
  auth: authReducer,
  alert: alertReducer,
  loading: loadingReducer,
  profile: profileReducer,
  desk: deskReducer,
});
