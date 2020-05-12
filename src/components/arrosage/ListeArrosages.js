import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchArrosages } from "../../actions/ArrosageActions";

import ItemArrosage from "./ItemArrosage";

class ListeArrosages extends Component {
    componentDidMount() {
        this.props.fetchArrosages();
    }

    renderFilamentList = arrosages => {
        if (Object.keys(arrosages).length === 0) {
            return null;
        }
        return arrosages.map(arrosage => (
            <ItemArrosage key={arrosage._id} {...arrosage} />
        ));
    };

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Humidité</th>
                        <th>Indicateur météo</th>
                    </tr>
                </thead>
                <tbody>{this.renderFilamentList(this.props.arrosages)}</tbody>
            </table>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        arrosages: Object.values(state.arrosages),
    };
};

export default connect(mapStateToProps, { fetchArrosages })(ListeArrosages);
