import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPrecipitation } from "../../actions/MeteoActions";

import { Bar } from "react-chartjs-2";

import "./MeteoChart.css";

class MeteoChart extends Component {
    componentDidMount() {
        this.props.fetchPrecipitation();
    }
    render() {
        var loading = this.props.meteoData ? "" : "(Loading...)";

        return (
            <div className="sensorChart">
                <h3 className="has-text-centered">
                    Données Darksky des précipitations {loading}
                </h3>
                <div className="chart">
                    <Bar
                        data={this.props.meteoData}
                        height={500}
                        options={{ maintainAspectRatio: false }}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state.meteo);

    if (!state.meteo.precipitation) return null;

    return {
        meteoData: state.meteo.precipitation
    };
};

export default connect(mapStateToProps, { fetchPrecipitation })(MeteoChart);
