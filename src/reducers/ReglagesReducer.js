import { FETCH_SETTINGS } from "../actions/types";

export default (state = {}, action) => {
    var newState = { ...state };
    switch (action.type) {
        case FETCH_SETTINGS:
            newState = { ...state, ...action.payload };
            return newState;
        default:
            return state;
    }
};
