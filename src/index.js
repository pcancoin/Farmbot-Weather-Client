import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

import "./index.css";
import App from "./App";
import reducers from "./reducers";

//Configure Redux Devtool if present
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Configure redux store
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk)) //Add redux thunk middleware
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
