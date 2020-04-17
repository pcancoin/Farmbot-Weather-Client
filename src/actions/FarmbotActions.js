import localApi from "../apis/localApi";
import { toast } from "react-toastify";

import { FETCH_FB_SOILSENSOR } from "./types";

export const fetchFbSoilSensor = () => async dispatch => {
    let response;
    try {
        response = await localApi.get("/farmbot");
    } catch (error) {
        toast.error(
            "Erreur lors de la récupération des données du Farmbot. Veuillez recharger la page."
        );
        return;
    }

    dispatch({
        type: FETCH_FB_SOILSENSOR,
        payload: response.data
    });
};
