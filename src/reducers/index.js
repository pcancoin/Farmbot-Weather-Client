import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'

import MeteoReducer from "./MeteoReducer";
import FarmbotReducer from "./FarmbotReducer";
import AuthReducer from "./AuthReducer";
import ReglagesReducer from "./ReglagesReducer";
import ArrosageReducer from './ArrosageReducer'

export default combineReducers({
    meteo: MeteoReducer,
    farmbot: FarmbotReducer,
    auth: AuthReducer,
    reglages: ReglagesReducer,
    arrosages: ArrosageReducer,
    form: formReducer
});
