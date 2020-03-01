import React from "react";
import "./App.css";
import { Route, Router } from "react-router-dom";
import history from "./history";

import Navbar from "./components/Navbar";

import Home from "./components/Home";
import HomeMeteo from "./components/meteo/HomeMeteo";
import HomeArrosage from "./components/arrosage/HomeArrosage";

function App() {
    return (
        <Router history={history}>
            <div className="app">
                <Navbar />
                <div className="container">
                    <Route path="/" exact component={Home} />
                    <Route path="/meteo" exact component={HomeMeteo} />
                    <Route path="/arrosage" exact component={HomeArrosage} />
                    <Route path="/reglages" exact component={null} />
                </div>
            </div>
        </Router>
    );
}

export default App;
