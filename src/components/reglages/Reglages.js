import React, { Component } from "react";

import "./Reglages.css";

import ReglagesForm from "./ReglagesForm";

class Reglages extends Component {

    render() {        
        return (
            <div className="reglages">
                <h1 className="title is-1 has-text-centered has-text-dark">
                    Réglages
                </h1>
                <ReglagesForm />
            </div>
        );
    }
}

export default Reglages;
