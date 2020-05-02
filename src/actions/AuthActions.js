import localApi from "../apis/localApi";
import { FETCH_CURRENT_USER } from "./types";

export const fetchUser = () => async dispatch => {
    let res;
    try {
        res = await localApi.get("/auth/current_user");
    } catch(err) {
        console.log(err);
    }
    

    dispatch({
        type: FETCH_CURRENT_USER,
        payload: res.data
    });
};
