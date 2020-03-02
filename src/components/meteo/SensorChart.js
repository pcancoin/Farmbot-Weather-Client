import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFbSoilSensor } from "../../actions/FarmbotActions";

import { Line } from "react-chartjs-2";

import "./SensorChart.css";

class SensorChart extends Component {
    componentDidMount() {
        this.props.fetchFbSoilSensor();
    }
    render() {
        var loading = this.props.chartData ? false : true;
        console.log(this.props.chartData, loading);

        return (
            <div className="sensorChart">
                <h3 className="has-text-centered">
                    Données du capteur d'humidité de Farmbot
                    {loading ? " (Loading...)" : ""}
                </h3>
                <div className="chart">
                    {loading ? null : (
                        <Line
                            data={this.props.chartData}
                            height={500}
                            options={{
                                maintainAspectRatio: false,
                                tooltips: {
                                    callbacks: {
                                        label: item => ` ${item.yLabel}%`
                                    },
                                    mode: "index",
                                    intersect: false
                                },
                                hover: {
                                    mode: "nearest",
                                    intersect: true
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
    if (!state.farmbot[0]) return {};

    var chartValues = state.farmbot.reduce((acc, val) => {
        acc.push(val.value);
        return acc;
    }, []);

    var chartLabels = state.farmbot.reduce((acc, val) => {
        acc.push(val.date);
        return acc;
    }, []);

    return {
        chartData: {
            datasets: [
                {
                    data: chartValues,
                    label: "Humidité du sol (%)",
                    backgroundColor: "rgba(17,117,184,0.4)",
                    borderColor: "rgb(17,117,184)"
                }
            ],
            labels: chartLabels
        }
    };
};

export default connect(mapStateToProps, { fetchFbSoilSensor })(SensorChart);
