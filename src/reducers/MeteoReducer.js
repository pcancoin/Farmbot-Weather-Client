import { FETCH_PRECIPITATIONS, FETCH_CURRENT_WEATHER } from "../actions/types";

export default (state = {}, action) => {
    var newState;
    switch (action.type) {
        case FETCH_CURRENT_WEATHER:
            newState = { ...state, ...action.payload };
            return newState;
        case FETCH_PRECIPITATIONS:
            newState = { ...state, precipitation: action.payload };
            return newState;
        default:
            return state;
    }
};
