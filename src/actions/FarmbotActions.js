import { FETCH_FB_SOILSENSOR } from "./types";
import localApi from "../apis/localApi";

export const fetchFbSoilSensor = () => async dispatch => {
    let response = await localApi.get("/farmbot");

    dispatch({
        type: FETCH_FB_SOILSENSOR,
        payload: response.data
    });
};
