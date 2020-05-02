import { combineReducers } from "redux";

import MeteoReducer from "./MeteoReducer";
import FarmbotReducer from "./FarmbotReducer";
import AuthReducer from "./AuthReducer";

export default combineReducers({
    meteo: MeteoReducer,
    farmbot: FarmbotReducer,
    auth: AuthReducer
});
