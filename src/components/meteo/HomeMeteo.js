import React, { Component } from "react";
import { connect } from "react-redux";
import Skycons from "react-skycons";

import MeteoChart from "./MeteoChart";

import "./HomeMeteo.css";

const iconMap = new Map([
    ["partly-cloudy-day", "PARTLY_CLOUDY_DAY"],
    ["partly-cloudy-night", "PARTLY_CLOUDY_NIGHT"],
    ["clear-day", "CLEAR_DAY"],
    ["clear-night", "CLEAR_NIGHT"],
    ["rain", "RAIN"],
    ["snow", "SNOW"],
    ["sleet", "SLEET"],
    ["wind", "WIND"],
    ["fog", "FOG"],
    ["cloudy", "CLOUDY"]
]);

class HomeMeteo extends Component {
    render() {
        console.log(iconMap);

        return (
            <div>
                <h1 className="title has-text-centered has-text-white">
                    Météo
                </h1>
                <div className="charts">
                    <MeteoChart />
                    <div className="infos">
                        <Skycons
                            color="white"
                            icon={iconMap.get(this.props.icon)}
                            autoplay={true}
                        />
                        <h3>{this.props.summary}</h3>
                        <h3>{this.props.prevSummary}</h3>
                        <h2>Rennes</h2>
                        <h3>11°C</h3>
                    </div>
                </div>
                <h1>Sensor</h1>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        icon: state.meteo.icon,
        summary: state.meteo.summary,
        prevSummary: state.meteo.prevSummary
    };
};

export default connect(mapStateToProps)(HomeMeteo);
