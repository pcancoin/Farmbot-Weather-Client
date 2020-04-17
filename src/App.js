import React from "react";
import "./App.css";
import { Route, Router } from "react-router-dom";
import history from "./history";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";

import Home from "./components/Home";
import HomeMeteo from "./components/meteo/HomeMeteo";
import HomeArrosage from "./components/arrosage/HomeArrosage";

function App() {
    toast.configure({
        autoClose: 4000,
        position: toast.POSITION.TOP_LEFT,
        closeButton: true
    });
    return (
        <Router history={history}>
            <Navbar />
            <div className="container">
                <Route path="/" exact component={Home} />
                <Route path="/meteo" exact component={HomeMeteo} />
                <Route path="/arrosage" exact component={HomeArrosage} />
                <Route path="/reglages" exact component={null} />
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnFocusLoss={false}
                rtl={false}
                draggable
                pauseOnHover
            />
        </Router>
    );
}

export default App;
