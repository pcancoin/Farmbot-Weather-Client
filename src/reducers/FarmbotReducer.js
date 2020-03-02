import { FETCH_FB_SOILSENSOR } from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_FB_SOILSENSOR:
            return action.payload;

        default:
            return state;
    }
};
