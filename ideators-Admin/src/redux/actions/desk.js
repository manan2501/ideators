import axios from "axios";
import { GET_ALL_DESK, DESK_ERROR } from "./types";

// Get desk data
export const getDesk = () => async (dispatch) => {
    try {
        const res = await axios.get("/api/desk");

        dispatch({
            type: GET_ALL_DESK,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: DESK_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};

// Forcefully stop a session
export const forceStop = (deskID) => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const body = JSON.stringify({ deskID });
    try {
        await axios.post("/api/admin/forceStop");
        const res = await axios.get("/api/desk", body, config);

        dispatch({
            type: GET_ALL_DESK,
            payload: res.data,
        });
    } catch (err) {
        console.log("forceStop error: ", err.response.statusText);
        dispatch({
            type: DESK_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};
