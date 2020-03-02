import { combineReducers } from "redux";

import MeteoReducer from "./MeteoReducer";
import FarmbotReducer from "./FarmbotReducer";

export default combineReducers({
    meteo: MeteoReducer,
    farmbot: FarmbotReducer
});
