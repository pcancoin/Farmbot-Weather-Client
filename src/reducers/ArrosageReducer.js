import { FETCH_ARROSAGES } from "../actions/types";

export default (state = {}, action) => {
    var newState = { ...state };
    switch (action.type) {
        case FETCH_ARROSAGES:
            newState = { ...state, ...action.payload };
            return newState;
        default:
            return state;
    }
};
