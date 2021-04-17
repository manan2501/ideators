import axios from "axios";
import setAuthToken from "../setAuthToken";
import {
  AUTH_ERROR,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  // CLEAR_PROFILE,
} from "./types";

//Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("/api/auth");
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Login User
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post("/api/auth", body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    setAuthToken(res.data);
    dispatch(loadUser());
  } catch (err) {
    // const errors = err.response.data.errors;

    // if (errors) {
    //   errors.forEach((error) => console.log(error.msg));
    // }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Logout
export const logout = () => ({ type: LOGOUT });
