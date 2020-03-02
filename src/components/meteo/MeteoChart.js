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
        var loading = this.props.meteoData ? false : true;

        return (
            <div className="meteoChart">
                <h3 className="has-text-centered">
                    Données Darksky des précipitations
                    {loading ? " (Loading...)" : ""}
                </h3>
                <div className="chart">
                    {loading ? null : (
                        <Bar
                            data={this.props.meteoData}
                            height={500}
                            options={{
                                maintainAspectRatio: false,
                                tooltips: {
                                    callbacks: {
                                        label: item => ` ${item.yLabel} mm/h`
                                    }
                                }
                            }}
                        />
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    if (!state.meteo.precipitation) return {};

    return {
        meteoData: state.meteo.precipitation
    };
};

export default connect(mapStateToProps, { fetchPrecipitation })(MeteoChart);
