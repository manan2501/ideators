import axios from "axios";
import { GET_CURRENT_PROFILE, GET_ALL_PROFILE, PROFILE_ERROR } from "./types";

// Get current users profile
export const getCurrentProfile = () => async (dispatch) => {
    try {
        const res = await axios.get("/api/profile/me");

        dispatch({
            type: GET_CURRENT_PROFILE,
            payload: res.data,
        });
    } catch (err) {
        console.log("Yeh error hai", err);
        // dispatch({
        //   type: PROFILE_ERROR,
        //   payload: { msg: err.response.statusText, status: err.response.status },
        // });
    }
};

// Get all profiles
export const getProfiles = () => async (dispatch) => {
    //dispatch({ type: CLEAR_PROFILE });

    try {
        const res = await axios.get("/api/profile");

        dispatch({
            type: GET_ALL_PROFILE,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};

// Add Credit to a profile
export const addCredit = (to, amount) => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    const body = JSON.stringify({ to, amount });

    try {
        await axios.post("/api/admin/addCredit", body, config);
        const res = await axios.get("/api/profile");

        dispatch({
            type: GET_ALL_PROFILE,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};

// Ban user
export const banUser = (who) => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    const body = JSON.stringify({ who });

    try {
        await axios.post("/api/admin/banUser", body, config);
        const res = await axios.get("/api/profile");

        dispatch({
            type: GET_ALL_PROFILE,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};

// Unban user
export const unbanUser = (who) => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    const body = JSON.stringify({ who });

    try {
        await axios.post("/api/admin/unbanUser", body, config);
        const res = await axios.get("/api/profile");

        dispatch({
            type: GET_ALL_PROFILE,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};
