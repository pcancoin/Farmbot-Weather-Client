import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <nav
                className="navbar is-fixed-top"
                role="navigation"
                aria-label="main navigation"
            >
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/">
                        FARMBOT WEATHER
                    </Link>

                    <button
                        className="navbar-burger"
                        data-target="navMenu"
                        aria-label="menu"
                        aria-expanded="false"
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </button>
                </div>

                <div id="navMenu" className="navbar-menu">
                    <div className="navbar-end">
                        <Link className="navbar-item" to="/meteo">
                            <span role="img" aria-label="Icône météo">
                                ⛅
                            </span>
                            Météo
                        </Link>

                        <Link className="navbar-item" to="/arrosage">
                            <span role="img" aria-label="Icône pluie">
                                💧
                            </span>
                            Arrosage automatique
                        </Link>

                        <Link className="navbar-item" to="/reglages">
                            <span role="img" aria-label="Icône réglages">
                                ⚙️
                            </span>
                            Réglages
                        </Link>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
