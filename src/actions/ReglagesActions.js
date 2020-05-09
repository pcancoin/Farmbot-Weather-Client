import localApi from "../apis/localApi";
import { toast } from "react-toastify";
import { FETCH_SETTINGS } from "./types";

export const submitSettings = (settings) => async (dispatch) => {
    let res;
    try {
        res = await localApi.post("/settings/", settings);
    } catch (err) {
        console.log(err.response.data.error);
        console.log(res);

        toast.error(
            "Erreur lors de l'envoi des réglages. " + err.response.data.error
        );
        return;
    }

    toast.success("Changement effectué !");

    dispatch({
        type: FETCH_SETTINGS,
        payload: res.data,
    });
};

export const fetchSettings = () => async (dispatch) => {
    let res;
    try {
        res = await localApi.get("/settings/");
    } catch (err) {
        console.log(err.response.data.error);
        console.log(res);

        toast.error("Erreur lors de la récupération des réglages. ");
        return;
    }
    console.log("recuperé");

    toast.success("Reglages récupérés !");

    dispatch({
        type: FETCH_SETTINGS,
        payload: res.data,
    });
};
