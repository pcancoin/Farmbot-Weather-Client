import { FETCH_PRECIPITATIONS } from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_PRECIPITATIONS:
            return action.payload;
        default:
            return state;
    }
};
