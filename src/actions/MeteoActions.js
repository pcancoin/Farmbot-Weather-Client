import localAPI from "../apis/localApi";

import { FETCH_PRECIPITATIONS, FETCH_CURRENT_WEATHER } from "./types";

export const fetchCurrentWeather = () => async dispatch => {
    let response = await localAPI.get("/darksky");

    dispatch({
        type: FETCH_CURRENT_WEATHER,
        payload: response.data
    });
};

export const fetchPrecipitation = () => async dispatch => {
    let response = await localAPI.get("/darksky/precipitation");

    dispatch({
        type: FETCH_PRECIPITATIONS,
        payload: response.data
    });
};
