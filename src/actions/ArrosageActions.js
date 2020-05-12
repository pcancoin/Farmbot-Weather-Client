import localApi from "../apis/localApi";
import { toast } from "react-toastify";
import { FETCH_ARROSAGES } from "./types";

export const fetchArrosages = () => async dispatch => {
    let res;
    try {
        res = await localApi.get("/arrosage");
    } catch(err) {
        console.log(err);
        toast.error(
            "Erreur lors de la récupération des données d'arrosage. Veuillez recharger la page."
        );
        return;
    }
    

    dispatch({
        type: FETCH_ARROSAGES,
        payload: res.data
    });
};
