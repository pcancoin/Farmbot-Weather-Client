import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { Route, Router, Switch } from "react-router-dom";
import history from "./history";
import { fetchUser } from "./actions/AuthActions";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";

import Home from "./components/Home";
import HomeMeteo from "./components/meteo/HomeMeteo";
import HomeArrosage from "./components/arrosage/HomeArrosage";
import Reglages from './components/reglages/Reglages'
import Error404 from "./components/Error404";
import Login from './components/auth/Login';

class App extends Component {

    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        toast.configure({
            autoClose: 4000,
            position: toast.POSITION.TOP_LEFT,
            closeButton: true,
        });
        return (
            <Router history={history}>
                <Navbar />
                <div className="container">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/meteo" exact component={HomeMeteo} />
                        <Route path="/arrosage" exact component={HomeArrosage} />
                        <Route path="/reglages" exact component={Reglages} />
                        <Route path="/auth/login" exact component={Login} />
                        <Route path="*" status={404} component={Error404}/>
                    </Switch>
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
}

export default connect(null, { fetchUser })(App);
