import React, { Component } from "react";

import "./Reglages.css";

import ReglagesForm from "./ReglagesForm";

class Reglages extends Component {
    render() {
        return (
            <div className="reglages columns">
                <div className="titre column">
                    <h1 className="title is-1 has-text-centered has-text-dark">
                        Réglages
                    </h1>
                </div>

                <ReglagesForm />
            </div>
        );
    }
}

export default Reglages;
