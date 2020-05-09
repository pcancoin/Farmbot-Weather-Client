import localAPI from "../apis/localApi";
import { toast } from "react-toastify";

import { FETCH_PRECIPITATIONS, FETCH_CURRENT_WEATHER } from "./types";

export const fetchCurrentWeather = () => async (dispatch) => {
    let response;
    try {
        response = await localAPI.get("/darksky");
    } catch (error) {
        toast.error(
            "Erreur lors de la récupération des données météo (Darksky). Veuillez recharger la page."
        );
        return;
    }

    dispatch({
        type: FETCH_CURRENT_WEATHER,
        payload: response.data,
    });
};

export const fetchPrecipitation = () => async (dispatch) => {
    let response;
    try {
        response = await localAPI.get("/darksky/precipitation");
    } catch (error) {
        toast.error(
            "Erreur lors de la récupération des données météo (Darksky). Veuillez recharger la page."
        );
        return;
    }
    dispatch({
        type: FETCH_PRECIPITATIONS,
        payload: response.data,
    });
};
