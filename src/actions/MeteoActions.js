import localAPI from "../apis/localApi";

import { FETCH_PRECIPITATIONS } from "./types";

export const fetchPrecipitation = () => async dispatch => {
    let response = await localAPI.get("/darksky");

    dispatch({
        type: FETCH_PRECIPITATIONS,
        payload: response.data
    });
};
